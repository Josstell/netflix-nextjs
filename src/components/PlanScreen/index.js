import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import db from "../../firebase/firebase"
import { loadStripe } from "@stripe/stripe-js"

const PlanScreem = () => {
  const [products, setProducts] = useState([])
  const { email, uid } = useSelector(state => state.user)
  const [subscription, setSubscritption] = useState(null)

  useEffect(() => {
    db.collection("customers")
      .doc(uid)
      .collection("subscriptions")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(async subscription => {
          setSubscritption({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start: subscription.data().current_period_start
              .seconds,
          })
        })
      })
  }, [uid])

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then(snapshot => {
        const products = {}
        snapshot.forEach(async productDoc => {
          products[productDoc.id] = productDoc.data()
          const priceSnap = await productDoc.ref.collection("prices").get()
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            }
          })
        })

        setProducts(products)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const loadChekout = async priceId => {
    const docRef = await db
      .collection("customers")
      .doc(uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })

    docRef.onSnapshot(async snap => {
      const { error, sessionId } = snap.data()

      if (error) {
        //Show an error to your customer and
        // inspect your cloud function logs in the Firebase console
        alert(`An error occurred: ${error.message}`)
      }

      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe

        const stripe = await loadStripe(
          "pk_test_51I3nyuJOIVxoBffO5CllggWC0LnKDYGAnLRYAa1mQ6CwhNZqbt0b5gTq4mQmIHUIPJgQdbxYHWp1Hy8KwctKkZua00hNLCJZMU"
        )
        stripe.redirectToCheckout({ sessionId })
      }
    })
  }

  console.log(products)
  console.log(subscription)
  return (
    <div className="planScreen">
      <br />
      {subscription && (
        <p>
          Renewal date:
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role)
        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "pansScreen_plan--disabled"
            } pansScreen_plan`}
          >
            <div className="plansScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadChekout(productData?.prices?.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        )
      })}
      <style jsx>{`
        .pansScreen_plan {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          opacity: 0.8;
        }

        .pansScreen_plan:hover {
          opacity: 1;
        }

        button {
          padding: 10px 20px;
          color: #fff;
          background-color: #e50914;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .pansScreen_plan--disabled > button {
          background-color: gray;
        }
      `}</style>
    </div>
  )
}

export default PlanScreem

const Footer = () => {
  return (
    <footer>
      <div className="grid-container">
        <div className="item1">@Simple Page 2021</div>
        <div className="item2">Ecommerce 2021</div>
      </div>
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
        }
        .item1 {
          position: absolute;
          left: 2rem;
          font-size: 20px;
          font-weight: "bold";
        }
        .item2 {
          position: absolute;
          right: 1rem;
          font-size: 20px;
          font-weight: "bold";
        }
      `}</style>
    </footer>
  )
}

export default Footer

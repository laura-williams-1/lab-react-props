export default function Progress({ donations, targetAmount }) {
  const total = donations.reduce((acc, curVal) => acc + curVal.amount, 0);
  return (
    <section className="progress">
      <h2>
        Raised ${total}
        <span className="secondary">
          {/* <span>
          {donations.amount.reduce((acc,curVal)=> return {acc + curVal,0})}
         </span> */}
          {/* <span>${total}</span> */}
        </span>{" "}
        of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}

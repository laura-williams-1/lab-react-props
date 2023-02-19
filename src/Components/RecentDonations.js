export default function RecentDonations({ donations }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <li>
          {donations.map((donation) => {
            return (
              <div>
                <span>
                  {donation.name} donated {donation.amount}
                </span>

                <div>{donation.caption}</div>
                <br></br>
              </div>
            );
          })}
        </li>
        {/* <!-- etc... -- name| amount| caption--> */}
      </ul>
    </section>
  );
}

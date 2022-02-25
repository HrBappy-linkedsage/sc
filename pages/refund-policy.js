import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care, Online Doctor,Medical Help ,Online Medical Help, Refund Policy, Shafa Care Refund Policy"
        />
      </Head>
      <Navbar />

      <section id="refund-policy" className="ptb-100">
        <div className="container">
          <div className="row title-area pb-5">
            <h1 className="h1 title2 w-100 text-center">Shafa refund policy</h1>
          </div>
          <div className="row">
            <div className="row single_section pb-2">
              <h3 className="mb-2 w-100">1. Payments</h3>
              <p className="w-100">
                1.1 &nbsp; The PLATFORM shall solely handle all financial
                transactions.
              </p>
              <p>
                1.2 &nbsp; No payments will be made other than the PLATFORM’s
                payment gateway.
              </p>
              <p>
                1.3 &nbsp; Where there is consultation fee, users must pay the
                consultation fee and VAT before joining the doctor queue for
                consultation.
              </p>
              <p>
                1.4 &nbsp; Where there is no consultation fee, users will not be
                required to make any payment and they will be straight
                transferred to the doctor consultation queue.
              </p>
              <p>
                1.5 &nbsp; Once the customer has made the payment and joined the
                queue, they will not be able to cancel the payment.
              </p>
            </div>

            <div className="row single_section pb-2">
              <h3 className="mb-2 w-100">2. Refund</h3>
              <p className="w-100">
                2.1 &nbsp; If the wait time in the queue is 60 minutes more than
                it stated before the payment, customers can cancel the
                consultation and a refund will be made deducting a small payment
                processing fee.
              </p>
              <p>
                2.2 &nbsp; If a doctor can not consult a patient due to any
                reason, the user will get a full refund.
              </p>
              <p>
                2.3 &nbsp; If a patient cancels a consultation prior to the
                video call of the doctor, a 5% fee will be deducted and the
                remaining fee will be refunded to the customer. There may be
                additional charges to make the refund. For example if the user
                wants the money to be refunded to bkash, bkash transaction fee
                will be deducted.
              </p>
              <p>
                2.4 &nbsp; For any cancellation and refund please email to
                refund@shafa.care
              </p>
              <p>2.5 &nbsp; Refund process may take up to 14 working days.</p>
              <p>2.6 &nbsp; Buyer advance through any means (debit, credit card, bank transfer, mobile banking, others)
If the price is fixed and the seller fails to deliver the product within the stipulated time for any reason, maximum 10 days of price fixing (excluding the time used by the respective payment medium). Of this, the entire amount paid by the buyer has to be repaid through the same means (debit card, credit card, bank transfer, mobile financial service, etc.) through which the buyer has paid the money. In this case, if there is any charge, the marketplace or the seller has to bear it. The buyer should be informed about the refund by email, SMS, phone or other means. However, in this case, the buyer cannot be paid in excess of the fixed price. This period can be relaxed if the buyer fails to accept the product or service in time.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

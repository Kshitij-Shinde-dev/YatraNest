import React from 'react'
import './Termpage.css'
import { Card } from 'react-bootstrap'


function Termpage()
{
  return (
    <div className='main-term d-flex justify-content-center align-items-center '>
           <Card className="card-term shadow p-4 my-4">
          <h2 className="mb-3">
            <span className="card-term-heading">Term & Conditions</span>
          </h2>
          <Card.Body className="fs-6 text-dark">
            <p>
                <strong>Bookings:</strong><br></br>
                You can search, book, and pay for bus tickets through our platform.
                Booking is confirmed only after successful payment.
            </p>
            <p>
               <strong>Cancellations & Refunds:</strong><br></br>
               Cancellation policies depend on the bus operator and are shown during booking.
               Refunds may take 5–10 working days and some charges are non-refundable.
               If booking fails after payment, we may issue a coupon or process a refund.
            </p>
            <p>
              <strong>Customer Data:</strong><br></br>
              We collect contact and travel information to complete your booking.
              Your data may be shared with operators and payment providers to ensure service.
            </p>
            <p>
               <strong> Privacy & Security:</strong><br></br>
               We don’t store payment details.
               We use SSL and other tech to keep your data safe.
            </p>
             <p>
                 <strong>Promotions:</strong><br></br>
                 Discounts are optional, non-refundable, and subject to availability.
            </p>

             <p>
                 <strong> Communication:</strong><br></br>
                 By booking, you agree to receive SMS, calls, WhatsApp, or emails—even if you're on DND—for booking and offer-related updates.
            </p>
             <p>
                 <strong>Policy Updates:</strong><br></br>
                 Terms may change, so check them before every booking.
            </p>
            <p>📞 Support: Call 02382-254554 / 244999 / 8806284444</p>
            <p>🌐 Website: www.yatranest.com</p>
          </Card.Body>
        </Card>
        </div>
  )
}

export default Termpage
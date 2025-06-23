import React from 'react'
import './Policypage.css'
import { Card } from 'react-bootstrap'

function Policypage() {
  return (
    <div className=' main-policy d-flex justify-content-center align-items-center'>
      <Card className="card-term shadow p-4 my-4">
       <h2 className='mb-3'><span className="card-privacy-heading">Privacy Policy</span></h2>
  <Card.Body className='fs-6 text-dark'>
  <p>This privacy policy ("Policy") applies to the collection, use, and disclosure of personal information by <strong>YatraNest</strong>, under the laws of India, as per the <em>Information Technology Act, 2000</em> and <em>Indian Contract Act, 1872</em>.</p>

  <h6>Collection of Personal Information</h6>
  <p>We may collect personal data such as your name, phone number, email, address, and other info required for service delivery. Non-personal data like IP address, browser, and OS details may also be collected to improve service performance.</p>

  <h6>Use of Personal Information</h6>
  <p>Your data may be used to:</p>
  <ul>
    <li>Provide services you request</li>
    <li>Communicate with you regarding bookings or account activity</li>
    <li>Improve our services and support</li>
    <li>Meet legal and regulatory obligations</li>
  </ul>

  <h6>Disclosure of Personal Information</h6>
  <p>Your data may be shared with trusted third-party partners for payment processing, customer support, or analytics—only under strict confidentiality. We may also share information if required by law or to protect safety, rights, or property.</p>

  <h6>Security of Personal Information</h6>
  <p>We employ firewalls, SSL encryption, and standard security protocols to safeguard your personal data from unauthorized access or misuse.</p>

  <h6>Retention of Information</h6>
  <p>Your information will be retained only as long as necessary to provide our services or to comply with legal obligations.</p>

  <h6>Your Rights</h6>
  <p>You have the right to request access, corrections, or deletion of your personal information. You may also withdraw your consent at any time by contacting us at <a href="mailto:info@yatranest.com">info@yatranest.com</a>.</p>

  <h6>Changes to This Policy</h6>
  <p>We may revise this policy periodically. Any material changes will be notified via email or posted at <a href="https://www.yatranest.com">www.yatranest.com</a>.</p>

  <h6>Governing Law</h6>
  <p>This policy is governed by Indian law. Disputes shall be resolved per the Indian Contract Act, 1872.</p>

  </Card.Body>
  </Card>
    </div>
  )
}

export default Policypage
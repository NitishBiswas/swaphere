import ParentDiv from '@/components/ParentDiv'
import React from 'react'

const DataDeletionPolicy = () => {
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>User Data Deletion Policy</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='text-small text-gray-300'>At $wapHere safeguarding our users' personal information is paramount. We are dedicated to upholding the highest standards of data protection and compliance with relevant regulations, such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). This Data Deletion Policy delineates the procedures for the deletion of user data collected through our app, available on the Google Play Store.</div>
                    <div className='text-medium text-gray-200 font-[500]'>Types of Data Collected</div>
                    <div className='text-small text-gray-300'>Our app collects the following types of user data:</div>
                    <div className='text-small text-gray-300 ml-[20px]'>1. Usernames</div>
                    <div className='text-small text-gray-300 ml-[20px]'>2. Email Addresses</div>
                    <div className='text-small text-gray-300 ml-[20px]'>3. Phone Numbers</div>
                    <div className='text-medium text-gray-200 font-[500]'>Data Deletion Procedures</div>
                    <div className='text-small text-gray-300'>Users seeking to delete their personal data collected by [Your App Name] can do so by contacting our support team. Here are the options for requesting data deletion:</div>
                    <div className='text-small text-gray-300'><span className='font-[700]'>Email Support: </span>Users can reach out to our support team via email to request data deletion. Our support agents will respond to emails promptly and facilitate the deletion of personal data as per the user's request.</div>
                    <div className='text-medium text-gray-200 font-[500]'>Retention Period</div>
                    <div className='text-small text-gray-300'>We retain user data only for as long as necessary to fulfill the purposes outlined in our Privacy Policy or as mandated by law. Once the data is no longer required for the specified purposes, we will securely delete or anonymize it to prevent unauthorized access or use.</div>
                    <div className='text-medium text-gray-200 font-[500]'>Third-Party Services</div>
                    <div className='text-small text-gray-300'>We may utilize third-party services or tools to process or store user data collected through our app. In such cases, we ensure that these third-party service providers adhere to stringent data protection standards and comply with applicable privacy laws.</div>
                    <div className='text-medium text-gray-200 font-[500]'>Updates to the Policies</div>
                    <div className='text-small text-gray-300'>We reserve the right to update or modify this Data Deletion Policy at any time. Any changes to the policy will be communicated to users through our app or website. Users are encouraged to review this policy periodically for updates or changes.</div>
                    <div className='text-medium text-gray-200 font-[500]'>Contact Information</div>
                    <div className='text-small text-gray-300'>For any inquiries or to request the deletion of your personal data, please reach out to our support team via live chat or email at support@swaphere.com</div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default DataDeletionPolicy
import React from 'react'

const Contact = () => {
  const formStyle = " block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3";
  const contactItem = "flex items-center my-4";
  const contactIcon = 'text-[2.5rem] text-yellow-700 mr-3';
  const contactTitle ='text-[1.5rem] lg:text-[2rem] font-bold text-gray-700';
  const contactDetail ='text-[1.1rem] lg:text-[1.2rem]';
  const links = "text-[2.5rem] mx-5 text-gray-800"
  return (
    <div>
      <div className='flex h-[15vh] lg:h-[20vh] relative pt-[5rem] mb-2 text-center justify-center items-center'>
        <h1 className='text-center font-bold backFont absolute inline-block text-[3.8rem] lg:text-[6rem] opacity-20'>CONTACT</h1>
        <h1 className='text-center frontFont absolute inline-block text-[2rem] lg:text-[3rem] font-bold text-gray-800'>GET IN  <span className='text-indigo-800'>TOUCH</span></h1>
      </div>
      <div className='flex flex-col-reverse lg:flex-row justify-between'>
        
        <div className='px-5 lg:ml-[6rem] lg:mt-[3rem]'>
          <div className={contactItem}>
            <div className={contactIcon}>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className='px-2'>
              <p className={contactTitle}>ADDRESS POINT</p>
              <p className={contactDetail}>Namapara, Khilkhet, Dhaka, Bangladesh.</p>
            </div>
          </div>
          <div className={contactItem}>
            <div className={contactIcon}>
              <i className="fa-solid fa-envelope-open"></i>
            </div>
            <div className='details'>
              <p className={contactTitle}>MAIL US</p>
              <p className={contactDetail}>mmi.consultants@gmail.com</p>
            </div>
          </div>
          <div className={contactItem}>
            <div className={contactIcon}>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className='details'>
              <p className={contactTitle}>CALL US</p>
              <p className={contactDetail}>+880 19##-######</p>
            </div>
          </div>
          <div className=''>
            <ul className='flex justify-center'>
              <li className={links}><a title="Visit" rel="noreferrer"  href='#' name="facebook"><i className="fa fa-facebook"></i></a></li>
              <li className={links}><a title="Visit" rel="noreferrer"  href='#' name="instagram"><i className="fa fa-instagram"></i></a></li>
              <li className={links}><a title="Visit" rel="noreferrer"  href='#' name="twitter"><i className="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="border-1 text-right overflow-hidden bg-none lg:mr-3">
          <iframe id="gmap_canvas" className='w-[100vw] lg:w-[60vw] h-[300px] lg:h-[400px] mx-auto mt-2 lg:h-' src="https://maps.google.com/maps?q=Boatghat%20Jame%20Mosjid%20RCJJ+RJX,%20200/KA,%20Khilkhet%20Nama%20Para%20Boatghat%20Mosjid.,%20Dhaka,%20Dhaka%201229&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
          <a href="https://fmovies-online.net"></a><br />
        </div>
      </div>

      <div className="w-[95vw] lg:w-full lg:px-60 mx-auto bg-slate-200 rounded-lg">
          <div className="p-6">
            <form method="POST" action="#">
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className={formStyle}
                  placeholder="Joe Bloggs"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className={formStyle}
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className={formStyle}
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                    <a href='#'>Send Message</a>
                </button>
              </div>
            </form>
          </div>
        </div>

    </div>
  )
}

export default Contact

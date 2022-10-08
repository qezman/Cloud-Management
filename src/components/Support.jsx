import supportImg from '../assets/meeting.jpg'
import {AiOutlineArrowRight, FaPhone, FcCellPhone, FiPhoneIncoming, HiChip, HiSupport} from "react-icons/all";

const Support = () => {
  return (
    <section name={'support'} className={'w-full mt-24'}>
      <div className={'w-full h-[700px] bg-gray-900/90 absolute'}>
        <img src={supportImg} alt="/" className={'w-full h-full object-cover mix-blend-overlay'}/>
      </div>

      <div className={'max-w-[1240px] mx-auto text-white relative'}>
        <div className={'px-4 py-12'}>
          <h2 className={'text-3xl pt-8 text-slate-300 uppercase text-center'}>Support</h2>
          <h3 className={'text-4xl font-bold py-6 text-center'}>Finding the right team</h3>
          <p className={'py-4 text-2xl text-slate-300'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti distinctio dolore enim eum ex exercitationem nesciunt nobis totam voluptate! Blanditiis, iusto vero. Culpa, eum.</p>
        </div>

        <div className={'grid grid-cols lg:grid-cols-3 relative gap-x-2 gap-y-16 px-4 pt-12 sm:pt-20 text-black'}>
          <div className={'bg-white rounded-xl shadow-2xl'}>
            <div className={'p-8'}>
              <FaPhone className={'text-white bg-indigo-600 w-12 h-12 p-2 rounded-full rounded-lg mt-[-4rem]'} />
              <h3 className={'font-bold text-2xl my-6'}>Sales</h3>
              <p className={'text-gray-600 text-lg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse ipsam nobis placeat. Aliquid assumenda delectus dolorem provident qui voluptates?</p>
            </div>

            <div className={'bg-slate-100 pl-8 py-4'}>
              <p className={'flex items-center text-indigo-600'}>Contact Us <AiOutlineArrowRight className={'w-5 ml-2'} /> </p>
            </div>
          </div>

          <div className={'bg-white rounded-xl shadow-2xl'}>
            <div className={'p-8'}>
              <HiSupport className={'text-white bg-indigo-600 w-12 h-12 p-2 rounded-full rounded-lg mt-[-4rem]'} />
              <h3 className={'font-bold text-2xl my-6'}>Technical Support</h3>
              <p className={'text-gray-600 text-lg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse ipsam nobis placeat. Aliquid assumenda delectus dolorem provident qui voluptates?</p>
            </div>

            <div className={'bg-slate-100 pl-8 py-4'}>
              <p className={'flex items-center text-indigo-600'}>Contact Us <AiOutlineArrowRight className={'w-5 ml-2'} /> </p>
            </div>
          </div>

          <div className={'bg-white rounded-xl shadow-2xl'}>
            <div className={'p-8'}>
              <HiChip className={'text-white bg-indigo-600 w-12 h-12 p-2 rounded-full rounded-lg mt-[-4rem]'} />
              <h3 className={'font-bold text-2xl my-6'}>Media Inquiries</h3>
              <p className={'text-gray-600 text-lg'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse ipsam nobis placeat. Aliquid assumenda delectus dolorem provident qui voluptates?</p>
            </div>

            <div className={'bg-slate-100 pl-8 py-4'}>
              <p className={'flex items-center text-indigo-600'}>Contact Us <AiOutlineArrowRight className={'w-5 ml-2'} /> </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Support
const About = () => {
  return (
    <section name={'about'} className={'w-full my-32'}>
      <div className={'max-w-[1240px] mx-auto'}>
        <div className={'text-center'}>
          <h2 className={'text-5xl font-bold'}>Trusted by developers across the world</h2>
          <p className={'text-2xl py-6 text-gray-500'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque deserunt dignissimos eius facere fugit, laborum natus quidem sint vero!</p>
        </div>

        <div className={'grid md:grid-cols-3 gap-1 px-2 text-center'}>
          <div className={'border py-8 rounded-xl shadow-xl'}>
            <p className={'text-6xl text-indigo-600 font-bold'}>100%</p>
            <p className={'text-gray-400 mt-2'}>Completion</p>
          </div>

          <div className={'border py-8 rounded-xl shadow-xl'}>
            <p className={'text-6xl text-indigo-600 font-bold'}>24/7</p>
            <p className={'text-gray-400 mt-2'}>Delivery</p>
          </div>

          <div className={'border py-8 rounded-xl shadow-xl'}>
            <p className={'text-6xl text-indigo-600 font-bold'}>100K</p>
            <p className={'text-gray-400 mt-2'}>Transactions</p>
          </div>


        </div>
      </div>
    </section>
  )
}
export default About
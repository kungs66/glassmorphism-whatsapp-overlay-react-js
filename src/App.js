import logo from './logo.svg';
import ChatBtn from './components/ChatBtn';

function App() {
  return (
    <div className="w-full text text-slate-100 py-32">
      <ChatBtn />
      <div className='text-center mx-auto'>
        <p className='text-2xl'>
          Glassmorphism chat overlay with WhatsApp Api
        </p>
      </div>
      <img className='w-2/3 items-center justify-center mx-auto' src={logo} alt="logo" />
      <div className='text-center mx-2 lg:mx-auto'>
        <p className='text-2xl'>
          With <a className='decoration-slate-100 underline' href='https://reactjs.org/' >ReactApp</a> and <a className='decoration-slate-100 underline' href='https://tailwindcss.com/' >Tailwindcss</a>
        </p>
      </div>
    </div>
  );
}

export default App;

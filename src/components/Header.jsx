function HeaderComponent() {
  return (
    <>
    <nav className="bg-gray-800 p-4">
    <div className='flex justify-between'>
    <img alt='logo' src="./tastytrack.png" className='rounded-md h-[40px]' />
      <div>
        <ul>
          <li className="inline-block mx-2 text-white">Home</li>
          <li className="inline-block mx-2 text-white">About</li> 
        </ul>
      </div>
    </div>
      
    </nav>
    </>
  );
}

export default HeaderComponent;
import Conversations from './Conversations';
import SearchInput from './SearchInput';
import LogoutButton from './LogoutButton';
import React from 'react'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>

        <SearchInput/>
        <div className='divider px-3'></div>
         <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar
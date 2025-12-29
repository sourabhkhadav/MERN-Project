import React, { useState } from 'react'
import { dummyUserData, ownerMenuLinks, assets } from '../../assets/assets'
import { useLocation, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const user = dummyUserData
  const location = useLocation()

  const [image, setImage] = useState(null)
  const fallbackUrl = 'https://i.pravatar.cc/150?img=12'

  const updateImage = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImage(file)
  }

  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 md:max-w-60 w-full border-r border-borderColor text-sm">

      {/* Profile Image */}
      <div className="group relative">
        <label htmlFor="image" className="cursor-pointer block">
          <img
            src={image ? URL.createObjectURL(image) : user?.image || fallbackUrl}
            alt="profile"
            // className="w-28 h-28 rounded-full object-cover "
            className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto "
          />

          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            onChange={updateImage}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/10 rounded-full">
            <img src={assets.edit_icon} alt="edit" />
          </div>
        </label>
      </div>

      {/* Save button (visible when a new image is selected) */}
      {image && (
        <button
          className="absolute top-0 right-0 flex items-center p-2 gap-1 bg-primary/10 text-primary cursor-pointer"
        >
          Save Image
          <img src={assets.check_icon} width={13} alt="save" />
        </button>
      )}

      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>

      {/* Menu Links */}
      <div className="w-full">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
              link.path === location.pathname
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600'
            }`}
          >
            <img
              src={
                link.path === location.pathname
                  ? link.coloredIcon
                  : link.icon
              }
              alt="menu icon"
            />

            <span className="max-md:hidden">{link.name}</span>

            {/* Right active bar */}
            <div
              className={`${
                link.path === location.pathname ? 'bg-primary' : ''
              } w-1.5 h-8 rounded-l-lg right-0 absolute`}
            />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

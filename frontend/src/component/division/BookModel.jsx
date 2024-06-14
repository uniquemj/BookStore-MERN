import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import React from "react";

const BookModel = ({ item, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onCLick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {item.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{item._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.author}</h2>
        </div>
        <p className="mt-4">Anything You want to show</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          doloremque nihil illum architecto! Nesciunt minima quod, asperiores
          adipisci molestias nemo error aperiam sequi nihil recusandae, neque
          alias deserunt doloremque magni? At aspernatur odio fugiat neque animi
          iusto ad nobis id. Repellat eum quod laborum consequatur soluta aut
          fugiat suscipit porro expedita, consectetur odio molestiae laudantium
          ut harum placeat voluptas voluptatum?
        </p>
      </div>
    </div>
  );
};

export default BookModel;

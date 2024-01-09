"use client";
import {FaHeart, FaRegComment, FaRegHeart, FaRegShareSquare} from "react-icons/fa";
import { useState } from "react";

interface PostProps {
  username: string;
  location: string;
  description: string;
  hashtags: string;
  likes: number;
  idUrl?: string;
  postUrl?: string;
  likeClick: boolean;
}
function TrocarCoracao({likeClick}: PostProps) {
  const [icone, setIcone] = useState(likeClick ? <FaHeart /> : <FaRegHeart />);
  const [clicked, setClicked] = useState(likeClick);

  const handleClick = () => {
    if(clicked) {
      setIcone(<FaHeart />);
      setClicked(false);
      likeClick = true;
    } else {
      setIcone(<FaRegHeart />);
      setClicked(true);
    }
  };

  return (
    <button className="flex mb-2 mt-2 " onClick={handleClick}>
      {icone}
      {likeClick ? true : false}
    </button>
  );
};

function UserPost({username, location, idUrl}: PostProps) {
  return (
    <header className='flex ml-14'>
      <img
        className="avatar rounded-full"
        src={idUrl}
        alt={username}
        width={100}
        height={100}
      />

      <section className='flex flex-col justify-center'>
        <span className='text-base font-bold'>{username}</span>
        <span className='text-xs font-extralight'>{location}</span>
      </section>
    
    </header>
  );
}

function ImgPost({postUrl}: PostProps) {
  return (
    <main className='flex items-center justify-start ml-20'>
      <img 
        src={postUrl}
        style={{ width: '60%', height: 'auto' }}
      />
    </main>
  );
}

function InfosPost({username, description, hashtags, likes, likeClick}: PostProps) { 
  return (
    <div className='flex flex-col ml-20'>
      <div className='flex items-center space-x-4 mb-2 mt-2'>
        <button>
          <TrocarCoracao likeClick= {likeClick} />
        </button>
        <button><FaRegComment /></button>
        <button><FaRegShareSquare /></button>
      </div>

      <section className='flex flex-row'>
        <span className='text-base font-bold mr-5'>{username}</span>
        <span className='text-base font-serif'>{description}</span>
      </section>

      <span>{hashtags}</span>
    </div>
  );
}


export default function Home() {
  return (
    <div>
      <UserPost username='Arthur' location='Recife' idUrl='https://media.istockphoto.com/id/1300845620/pt/vetorial/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=7TO9d1_F-zi74bCZGEUzpa-nXT1JbcVglYMk_4MSwdg='/>
      <ImgPost postUrl='https://i.pinimg.com/originals/ec/99/6d/ec996dca6747f354f5a4f94e820ad408.jpg'/> 
      <InfosPost username='Arthur' description='Final de tarde' hashtags='#praia #feriado' likes={16} likeClick={false}/> 
    </div>
  )
}

import PostComponent from './PostComponent';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const postPhoto = "https://i02.fotocdn.net/s111/f741264eba72dc3f/public_pin_l/2486566313.jpg";


const avatarPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxwBGpoFONlCRbZw5zEvhbhNJwxkDHrSV_A&usqp=CAU"


const posts = [
  {
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр."
  },
  {
    name: "Someone",
    photo: avatarPhoto,
    nickname: "@someone",
    content: "— Скажите, как вступить в вашу организацию? — Это просто. Нужно замочить 6 человек и одного кота.— А кота за что?— Поздравляю, вы приняты!",
    image: postPhoto,
    date: "23 авг."
  }
]


function Post() {

  return (
    <div>
      {posts.map((post) => <PostComponent name={post.name} photo={post.photo} nickname={post.nickname} content={post.content} image={post.image} date={post.date} key={post.name} />)}
    </div>
  );
}

export default Post;


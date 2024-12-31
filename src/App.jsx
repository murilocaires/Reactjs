import { Header } from "./componentes/Header";
import { Sidebar } from "./componentes/Sidebar";
import { Post } from "./componentes/Post";
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl: './src/assets/profile.jpg',
      name: 'Murilo Caires',
      role: 'Web Developer Junior'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'jane.design/doctorcare'},
    ],

    publishedAt: new Date('2024-06-03 11:56:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://images.unsplash.com/photo-1721332154161-847851ea188b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Mayk Brito',
      role: 'Web Developer Senior'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'jane.design/doctorcare'},
    ],

    publishedAt: new Date('2024-05-03 11:56:00'),
  },
]

export default function App() {

  return (
  <div>
      <Header/>
    
      <div className={styles.wrapper}>

      <Sidebar/>

      <main>
        {posts.map(post =>{
          return (
            <Post
            key={posts.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
        })}
      </main>

      </div>

  </div>

    
  )
}

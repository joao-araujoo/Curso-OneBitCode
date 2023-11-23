import Profile from "./components/Profile";
import avatarImg from "./assets/joao.png"

export default function App() {
  return (
    <>
      <h1>Exercício 3</h1>
      
      <Profile 
        avatar={avatarImg} 
        name="João Araujo"
        bio="Full-Stack Javascript Developer" 
        phone="+55 (12) 997272631"
        email="joao.araujo@gmail.com"
        githubUrl="https://github.com/joao-araujoo"
        linkedinUrl="https://www.linkedin.com/in/joao-araujoo/"
        instagramUrl="https://www.instagram.com/joao.araujoo_/"
      />
    </>
  );
}

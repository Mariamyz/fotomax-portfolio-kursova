import { useContent } from "../../content/ContentContext";

export default function Home(){
  const { content } = useContent();
  return (
    <div className="container" style={{padding:"24px 0"}}>
      <img src={content.hero.imageUrl} alt="hero" style={{borderRadius:12, marginBottom:16}} />
      <h1>{content.hero.title}</h1>
      <p style={{opacity:.85}}>{content.hero.subtitle}</p>
    </div>
  );
}

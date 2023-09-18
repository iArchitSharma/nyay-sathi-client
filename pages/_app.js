import '@/styles/globals.css'
import NavBar from '@/components/NavBar';

const user = {
  profileImage: "/test/profile.jpg",
  fullName: "John Doe",
  firstName: "John",
  username: "johndoe",
  location: "Gaya, Bihar",
  experience: 5,
  rating: 3,
  bio: "Web Developer with a passion for coding.",
  portfolioLink: "https://example.com/johndoe-portfolio",
  type: "Advocate",
  enrollment: "AP/00107/2020",
};

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar user={user}/>
      <Component {...pageProps} />
    </div>
  );
}

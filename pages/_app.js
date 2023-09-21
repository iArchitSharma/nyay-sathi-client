import '@/styles/globals.css'
import NavBar from '@/components/NavBar';
import { AuthProvider } from '../contexts/AuthContext';
import Footer from '@/components/Footer';

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
    <AuthProvider>
      <NavBar user={user}/>
      <Component {...pageProps} />
      <Footer/>
      </AuthProvider>
  );
}

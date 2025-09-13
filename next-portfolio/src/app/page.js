// Server Component by default (no hooks here)
import Home from '../components/Home';

export const metadata = {
  title: 'Nick Stricker – Home',
  description: 'Portfolio home',
};

export default function Page() {
  return <Home />;
}

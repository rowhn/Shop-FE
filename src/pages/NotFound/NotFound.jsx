import { Button } from '../../components/ui';

export default function NotFound() {
  return (
    <div className="container py-5 my-5 text-center">
      <h1 className="page-title">Page not found</h1>
      <p className="text-muted">The page you are looking for does not exist.</p>
      <Button to="/">Go home</Button>
    </div>
  );
}

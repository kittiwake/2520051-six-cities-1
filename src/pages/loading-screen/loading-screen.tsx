
import '../../../public/css/loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p className="loading-text">Загрузка...</p>
    </div>
  );
}

export default LoadingScreen;

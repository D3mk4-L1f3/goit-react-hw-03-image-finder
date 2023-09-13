import { ThreeDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <ThreeDots
      color="#2e11d0"
      width="200"
      visible={true}
      aria-label="loading..."
      wrapperStyle={{ margin: '0 auto' }}
    />
  );
}

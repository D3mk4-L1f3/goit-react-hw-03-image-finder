import { Circles } from 'react-loader-spinner';

export function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="#2e11d0"
      ariaLabel="loading..."
      wrapperStyle={{ margin: '0 auto' }}
      wrapperClass=""
      visible={true}
    />
  );
}

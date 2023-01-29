import { ClickBar } from 'components/ClickBar/ClickBar';
import { useLogoutRedirect } from 'hooks/useLogoutRedirect';

export const Dashboard = () => {
  useLogoutRedirect();
  return (
    <>
      <h1>Dashboard</h1>
      <ClickBar />
    </>
  );
};

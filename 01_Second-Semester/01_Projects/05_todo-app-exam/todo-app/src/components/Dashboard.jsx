import { getUser } from "./Auth";

const Dashboard = () => {
  const user = getUser()
  const username = user?.name
  return (
    <div>
      <nav>
        Welcome {username}
      </nav>



    </div>
  );
};

export default Dashboard

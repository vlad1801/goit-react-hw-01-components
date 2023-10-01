import user from '../json/user.json';
import data from '../json/data.json'
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';
import TransactionHistory from './Transactions/Transactions';

export const App = () => {
  return (
    <section>
      <Profile
        imageUrl={user.avatar}
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        stats={user.stats}
      />

      <Statistics title={'Upload stats'} stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions}/>   
    </section>
  );
};

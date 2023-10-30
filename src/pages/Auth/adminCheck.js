import { account, databases } from 'lib/appwrite';
import { Query } from 'appwrite';

export const adminCheck = async () => {
  const snapshot = await account.get();
  const hui = await databases.listDocuments(
    '653cc2cb78b64ef1b64c',
    '653cc32b72d4a197e229',
    Query.equal('isAdmin', true)
  );
  console.log(hui.Sid);
  //   console.log(snapshot);
};

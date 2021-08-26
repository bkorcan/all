import { query as q } from 'faunadb';
import { serverClient } from '../../utils/fauna-auth';


export default async (req, res) => {
  
  const { id,name, price } = req.body;

  try {
    await serverClient.query(
      q.Create(q.Ref(q.Collection('villa'),id), 
      {
        data: {
          name,
          price,
        },
      })
    );
    
    res.status(200).end();
  } catch (e) {
    res.status(500)
    res.json({ error: e.message });
  }
};

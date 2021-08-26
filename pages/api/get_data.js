import { query as q } from 'faunadb';
import { serverClient } from '../../utils/fauna-auth';



export default async (req, res) => {
//   const { id } = req.query
//   console.log(id)
  try {

    const data = await serverClient.query(
      q.Map(

        q.Select('data', q.Paginate(q.Match("villas_by_date", '10905'))),
    
        q.Lambda(
    
            ['id'],
            q.Get(
              q.Ref(
               q.Collection(
                          'villa'
                         ), q.Var('id')
                )
              )
              
             ) 
         )
    )
    res.status(200).json(data);


  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};
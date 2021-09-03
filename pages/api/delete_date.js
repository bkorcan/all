import { query as q } from 'faunadb';
import { serverClient } from '../../utils/fauna-auth';

export default async (req, res) => {

    const { id } = req.body;

    try {
        await serverClient.query(
            q.Delete(
                q.Ref(
                    q.Collection(
                        'date'
                    ), id
                )
            )
        );
        res.status(200).end();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

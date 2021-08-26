import { query as q } from 'faunadb';
import { serverClient } from '../../utils/fauna-auth';

export default async (req, res) => {
    console.log(req.body)

    const { villaId, date } = req.body;
    const refId = villaId.toString()+date.toString()

    console.log(refId)

    try {
        await serverClient.query(
            q.Create(
                q.Ref(
                    q.Collection('date'), refId), {
                data: {
                    id: villaId,
                    date: date
                }
            }
            )
        );
        res.status(200).end();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

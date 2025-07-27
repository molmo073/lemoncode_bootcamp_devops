import { ObjectId } from 'mongodb';
import { Topic as TopicEntity } from '../entities';
import { TopicDatabase } from '../dal/topics.contract.dal';

function isTopicDatabase(topic: TopicEntity | TopicDatabase): topic is TopicDatabase {
    return (topic as TopicDatabase)._id !== undefined;
}

function isTopicEntity(topic: TopicEntity | TopicDatabase): topic is TopicEntity {
    return (topic as TopicEntity).id !== undefined;
}

export function mapTopic(topic: TopicEntity | TopicDatabase): TopicEntity | TopicDatabase {
    if (isTopicDatabase(topic)) {
        const t = {
            ...topic,
            id: topic._id.toString(),
            name: (topic as any).Name, // para asegurar compatibilidad con registros insertados con "Name"
        };
        delete t['_id'];
        delete t['Name'];
        return t as TopicEntity;
    }

    if (isTopicEntity(topic)) {
        const t = {
            ...topic,
            _id: new ObjectId(topic.id),
            Name: topic.name, // para que se inserte como Name en la DB
        };
        delete t['id'];
        delete t['name'];
        return t as TopicDatabase;
    }

    return topic;
}

export function mapTopics(topics: TopicEntity[] | TopicDatabase[]): TopicEntity[] | TopicDatabase[] {
    if (topics.length > 0 && isTopicDatabase(topics[0])) {
        return (topics as TopicDatabase[]).map(mapTopic) as TopicEntity[];
    } else {
        return (topics as TopicEntity[]).map(mapTopic) as TopicDatabase[];
    }
}

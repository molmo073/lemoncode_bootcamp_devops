import { TopicDatabase, TopicDAL } from '../dal/topics.contract.dal';
import { Topic as TopicEntity } from '../entities';
import { mapTopic, mapTopics } from './mappers';

export interface TopicsService {
  createTopic(topic: TopicEntity): Promise<void>;
  getTopics(): Promise<TopicEntity[]>;
  getTopicById(id: string): Promise<TopicEntity | null>;
  updateTopic(id: string, topic: Partial<TopicEntity>): Promise<TopicEntity>;
  deleteTopic(id: string): Promise<void>;
}

export type TopicsServiceFactory = (
  topicDAL: TopicDAL
) => TopicsService;

export const topicsServiceFactory: TopicsServiceFactory = (
  topicDAL: TopicDAL
): TopicsService => {
  return {
    async createTopic(topic: TopicEntity): Promise<void> {
      const dbTopic = mapTopic(topic) as TopicDatabase;
      await topicDAL.createTopic(dbTopic);
    },

    async getTopics(): Promise<TopicEntity[]> {
      const result = await topicDAL.getTopics();
      return mapTopics(result) as TopicEntity[];
    },

    async getTopicById(id: string): Promise<TopicEntity | null> {
      const result = await topicDAL.getTopicById(id);
      return result ? (mapTopic(result) as TopicEntity) : null;
    },

    async updateTopic(id: string, topic: Partial<TopicEntity>): Promise<TopicEntity> {
      const dbTopic = mapTopic({ ...topic, id } as TopicEntity) as Partial<TopicDatabase>;
      await topicDAL.updateTopic(id, dbTopic);
      return topic as TopicEntity;
    },

    async deleteTopic(id: string): Promise<void> {
      await topicDAL.deleteTopic(id);
    }
  };
};

import { Client } from "@larksuiteoapi/node-sdk";
import { config } from "./config.js";

export class LarkClient {
  private client: Client;

  constructor() {
    this.client = new Client({
      appId: config.appId,
      appSecret: config.appSecret,
      disableTokenCache: false // Enable SDK's automatic token management
    });
  }

  // Get user information by employee ID
  async getUserInfo(employeeId: string) {
    try {
      const response = await this.client.contact.v3.user.get({
        path: {
          user_id: employeeId,
        },
        params: {
          user_id_type: 'user_id', // Using open_id as the lookup type
          department_id_type: 'open_department_id',
        }
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }

  // This method will be used to get the client instance
  getClient(): Client {
    return this.client;
  }

  // Add helper methods for common Lark API operations
  // These will be implemented based on the specific tools we need
} 
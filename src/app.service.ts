import { Injectable } from '@nestjs/common';

/**
 * AppService - base service for the application
 */
@Injectable()
export class AppService {
    /**
     * Simple up and running responder for the health check endpoint.
     * @returns {string} - health check response
     */
    health(): string {
        return 'OK';
    }
}

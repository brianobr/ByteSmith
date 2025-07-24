import { 
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type PageView,
  type InsertPageView
} from "@shared/schema";

// Storage interface with portfolio-specific methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  markContactAsRead(id: number): Promise<void>;
  
  // Analytics methods
  recordPageView(pageView: InsertPageView): Promise<PageView>;
  getPageViews(page?: string): Promise<PageView[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private views: Map<number, PageView>;
  private currentUserId: number;
  private currentContactId: number;
  private currentViewId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.views = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentViewId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contact: ContactSubmission = {
      ...submission,
      id,
      subject: submission.subject || null,
      isRead: false,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }

  async markContactAsRead(id: number): Promise<void> {
    const contact = this.contacts.get(id);
    if (contact) {
      contact.isRead = true;
    }
  }

  async recordPageView(pageView: InsertPageView): Promise<PageView> {
    const id = this.currentViewId++;
    const view: PageView = {
      ...pageView,
      id,
      userAgent: pageView.userAgent || null,
      ipAddress: pageView.ipAddress || null,
      referrer: pageView.referrer || null,
      createdAt: new Date()
    };
    this.views.set(id, view);
    return view;
  }

  async getPageViews(page?: string): Promise<PageView[]> {
    const allViews = Array.from(this.views.values());
    return page ? allViews.filter(v => v.page === page) : allViews;
  }
}

// Always use in-memory storage (no database required)
export const storage = new MemStorage();

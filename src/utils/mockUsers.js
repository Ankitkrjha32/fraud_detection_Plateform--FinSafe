export const mockUsers = [
  {
    id: 1,
    email: 'admin@finsafe.com',
    password: 'admin123',
    firstName: 'Manish',
    lastName: 'Kumar',
    role: 'admin',
    company: 'FinSafe'
  },
  {
    id: 2,
    email: 'demo@finsafe.com',
    password: 'demo123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'user',
    company: 'Demo Corp'
  },
  {
    id: 3,
    email: 'test@finsafe.com',
    password: 'test123',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'analyst',
    company: 'Test Inc'
  }
];

export const validateUser = (email, password) => {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
};
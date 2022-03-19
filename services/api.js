export default {
  // Authentication
  login: 'auth/login', // Login - Post
  sendRegistrationOtp: '/auth/sendRegistrationOtp', // Send Registration OTP -  Post
  register: 'auth/register', // Registration - Post
  userSession: 'auth/getSessionDetails', // Get User session details - Get
  sendPasswordResetOtp: 'auth/sendPasswordResetOtp', // Send OTP for reset password - POST
  resetPassword: 'auth/passwordReset', // Reset user password - POST

  // Account
  editAccount: 'account', // Edit account details - PU
  fundWallet: 'account/fundWallet', // Fund user wallet - POST
  transferFunds: 'account/transferFunds', // Transfer funds to user and between wallets - POST
  getWalletType: 'account/getWalletType', // Get all wallet type
  myTransactions: 'transactions', // Get all Transactions - Get
  // Cards
  addCard: 'card', // Add a new card - POST
  deleteCard: 'card', // Delete a new card - DEL - /cardID

  // Banks
  addBank: 'bank', // Add a new bank - POST
  deleteBank: 'bank', // Delete a new bank - DEL - /bankID

  // Savings
  // Daily Savings
  startDailySavings: 'savings/start', // Start a daily savings - POST
  settleDailySavingsManually: 'settleDailySavingsManually', // Manually fubd your a daily savings - POST
  myDailySavingsHistory: 'savings/MyDailySavingsHistory' // Manually fubd your a daily savings - POST

}

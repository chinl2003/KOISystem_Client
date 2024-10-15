<template>
  <div>
    <HeaderCustomer />
    <div class="content">
      <h1>Wallet Control</h1>

      <!-- Wallet Balance Info -->
      <div class="wallet-info">
        <p>Current Balance: {{ walletBalance }} VND</p>
      </div>

      <!-- Add Funds Section -->
      <div class="actions">
        <div class="add-funds">
          <h3>Add Funds</h3>
          <input type="number" v-model="addAmount" placeholder="Amount to add" />
          <button @click="addFunds">Add</button>
        </div>

        <!-- Transfer Funds Section -->
        <div class="transfer-funds">
          <h3>Transfer Funds</h3>
          <input type="number" v-model="transferAmount" placeholder="Amount to transfer" />
          <input type="text" v-model="recipient" placeholder="Recipient ID" />
          <button @click="transferFunds">Transfer</button>
        </div>
      </div>

      <!-- Transaction History Section -->
      <div class="transaction-history">
        <h3>Transaction History</h3>
        <ul v-if="transactions.length > 0">
          <li v-for="transaction in transactions" :key="transaction.id">
            <strong>{{ transaction.type }}</strong> | Amount: {{ transaction.amount }} USD | 
            Date: {{ new Date(transaction.date).toLocaleString() }} | 
            Recipient: {{ transaction.recipient || 'N/A' }}
          </li>
        </ul>
        <p v-else>No transactions yet.</p>
      </div>
    </div>
    <FooterCustomer />
  </div>
</template>

<script>
import HeaderCustomer from '@/components/HeaderCustomer.vue'
import FooterCustomer from '@/components/FooterCustomer.vue'

export default {
  name: 'WalletControl',
  components: {
    HeaderCustomer,
    FooterCustomer
  },
  data() {
    return {
      walletBalance: 1000, // Example balance, you'd fetch this from an API
      addAmount: 0,
      transferAmount: 0,
      recipient: '',
      transactions: [] // To store the transaction history
    }
  },
  methods: {
    addFunds() {
      if (this.addAmount > 0) {
        // Add funds to wallet balance
        this.walletBalance += parseFloat(this.addAmount)

        // Add this action to transaction history
        this.transactions.push({
          id: this.transactions.length + 1,
          type: 'Add Funds',
          amount: this.addAmount,
          date: new Date(),
          recipient: null // No recipient for adding funds
        })

        this.addAmount = 0
        alert('Funds added successfully!')
      } else {
        alert('Please enter a valid amount to add.')
      }
    },
    transferFunds() {
      if (this.transferAmount > 0 && this.recipient) {
        if (this.transferAmount <= this.walletBalance) {
          // Deduct from wallet balance
          this.walletBalance -= parseFloat(this.transferAmount)

          // Add this action to transaction history
          this.transactions.push({
            id: this.transactions.length + 1,
            type: 'Transfer Funds',
            amount: this.transferAmount,
            date: new Date(),
            recipient: this.recipient
          })

          this.transferAmount = 0
          this.recipient = ''
          alert('Funds transferred successfully!')
        } else {
          alert('Insufficient funds for this transfer.')
        }
      } else {
        alert('Please fill out all fields correctly.')
      }
    }
  }
}
</script>

<style scoped>
.content {
  min-height: 60vh;
  padding: 20px;
}

.wallet-info {
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.add-funds, .transfer-funds {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.transaction-history {
  margin-top: 40px;
}

.transaction-history ul {
  list-style: none;
  padding: 0;
}

.transaction-history li {
  background: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>

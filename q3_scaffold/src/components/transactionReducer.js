export default function transactionReducer(expenses, action) {
  console.log("action "+JSON.stringify(action))
    switch (action.type) {
      case 'add': {
        return [
          ...expenses,
          {
            id:action.expense.id,
            text: action.expense.text,
            amount: action.expense.amount,
          },
        ];
      }
      case 'delete': {
        return expenses.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  
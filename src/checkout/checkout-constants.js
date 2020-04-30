exports.ERRORS = {
    BOOK_NOT_IN_LIBRARY: {
        code: 'BOOK_NOT_IN_LIBRARY',
        message: 'No book with this ISBN was found',
    },
    CHECKOUT_LIMIT_EXCEEDED: {
        code: 'CHECKOUT_LIMIT_EXCEEDED',
        message: 'You can only checkout 3 books at a time',
    },
    OVERDUE_BOOKS: {
        code: 'OVERDUE_BOOKS',
        message: 'Please return overdue books before new checkouts',
    },
    BOOK_ALREADY_CHECKED_OUT: {
        code: 'BOOK_ALREADY_CHECKED_OUT',
        message: 'You have already checkout out a copy of this book',
    },
    INVALID_ISBN: {
        code: 'INVALID_ISBN',
        message: 'ISBN must be defined and valid',
    },
    BOOK_UNAVAILABLE: {
        code: 'BOOK_UNAVAILABLE',
        message: 'All copies of this book have been checked out',
    },
}

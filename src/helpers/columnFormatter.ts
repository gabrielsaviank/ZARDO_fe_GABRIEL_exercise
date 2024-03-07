
export const columnFormatter = (columnKey: string) => {
    switch (columnKey) {
        case 'Team Lead':
            return '👨‍💼 Team Lead';
        case 'Name':
            return '👤 Name';
        case 'Display Name':
            return '🚀 Display Name';
        case 'Location':
            return '📍 Location';
        default:
            return columnKey;
    }
};


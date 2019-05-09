import { initializeIcons } from '@uifabric/icons';
initializeIcons();

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

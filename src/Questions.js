const Questions = {
  "d-1": {
    text: "This is a scenario. Do you:",
    options: [
      {
        potential: { 0: "d-1-1" },
        text: "Go to subdecision A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "d-1-2", 0.5: "d-1-3" },
        text: "Go to subdecision B or maybe C",
      },
    ],
  },
  "d-1-1": {
    text: "This is subdecision A. Do you:",
    options: [
      {
        potential: { 0: "r-1-1-1" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "r-1-1-2" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
    ],
  },
  "d-1-2": {
    text: "This is a scenario. Do you:",
    options: [
      {
        potential: { 0: "r-1-2-1" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "r-1-2-2" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
    ],
  },
  "d-1-3": {
    text: "This is a scenario. Do you:",
    options: [
      {
        potential: { 0: "r-1-2-1" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
      {
        potential: { 0: "r-1-2-2" },
        text: "Go to result A-A",
        impact: {
          cash: 5,
          health: -5,
          rating: 1,
          environment: -100,
        },
      },
    ],
  },
  "r-1-1-1": {
    text: "This is result A-A. The impacts are encoded below",
    next: "d-2",
  },
  "r-1-1-2": {
    text: "This is result A-B. The impacts are encoded below",
    next: "d-2",
  },
  "r-1-2-1": {
    text: "This is result B-A. The impacts are encoded below",
    next: "d-2",
  },
  "r-1-2-2": {
    text: "This is result B-B. The impacts are encoded below",
    next: "d-2",
  },
};

export { Questions };

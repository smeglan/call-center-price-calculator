export type Procedure = {
  name: string;
  cashPrice: number;
  monthlyPrice: number;
};

export type Prices = {
  RESIDENCIAL: Procedure[];
  COMERCIAL: Procedure[];
};

export const prices: Prices = {
  RESIDENCIAL: [
    {
      name: "ASISTENCIA TÉCNICA Y DIAGNOSTICO 1 ARTEFACTO",
      cashPrice: 79000,
      monthlyPrice: 7900,
    },
    {
      name: "ASISTENCIA TÉCNICA Y DIAGNÓSTICO 2 ARTEFACTO",
      cashPrice: 118000,
      monthlyPrice: 11800,
    },
    {
      name: "ASISTENCIA TÉCNICA Y DIAGNÓSTICO 3 ARTEFACTO",
      cashPrice: 157000,
      monthlyPrice: 15700,
    },
    {
      name: "ASISTENCIA TÉCNICA Y DIAGNÓSTICO 4 ARTEFACTOS",
      cashPrice: 196000,
      monthlyPrice: 19600,
    },
    {
      name: "COTIZACIÓN",
      cashPrice: 70000,
      monthlyPrice: 7000,
    },
    {
      name: "ESTUFA DE 2 PUESTOS",
      cashPrice: 88000,
      monthlyPrice: 8800,
    },
    {
      name: "ESTUFA DE 3, 4, 5 Y 6 PUESTOS",
      cashPrice: 165000,
      monthlyPrice: 16500,
    },
    {
      name: "CALENTADOR",
      cashPrice: 175000,
      monthlyPrice: 17500,
    },
    {
      name: "SECADORA",
      cashPrice: 175000,
      monthlyPrice: 17500,
    },
    {
      name: "HORNO EMPOTRADO USO DOMÉSTICO",
      cashPrice: 165000,
      monthlyPrice: 16500,
    },
    {
      name: "CHIMENEA",
      cashPrice: 175000,
      monthlyPrice: 17500,
    },
    {
      name: "ESTUFA + ESTUFA",
      cashPrice: 330000,
      monthlyPrice: 33000,
    },
    {
      name: "ESTUFA 2 PUESTOS + CALENTADOR",
      cashPrice: 263000,
      monthlyPrice: 26300,
    },
    {
      name: "ESTUFA+ESTUFA+ESTUFA",
      cashPrice: 495000,
      monthlyPrice: 49500,
    },
    {
      name: "ESTUFA+CALENTADOR / ESTUFA+SECADORA / ESTUFA+CHIMENEA",
      cashPrice: 340000,
      monthlyPrice: 34000,
    },
    {
      name: "ESTUFA+CALENTADOR+HORNO",
      cashPrice: 505000,
      monthlyPrice: 50500,
    },
    {
      name: "ESTUFA+CALENTADOR+SECADORA / ESTUFA+CALENTADOR+CHIMENEA",
      cashPrice: 515000,
      monthlyPrice: 51500,
    },
    {
      name: "CALENTADOR+CHIMENEA+SECADORA",
      cashPrice: 525000,
      monthlyPrice: 52500,
    },
    {
      name: "4 ARTEFACTOS",
      cashPrice: 690000,
      monthlyPrice: 69000,
    },
    {
      name: "5 ARTEFACTOS",
      cashPrice: 855000,
      monthlyPrice: 85500,
    },
  ],
  COMERCIAL: [
    {
      name: "ASISTENCIA TÉCNICA Y DIAGNÓSTICO 1 ARTEFACTO",
      cashPrice: 95000,
      monthlyPrice: 9500,
    },
    {
      name: "ASISTENCIA TÉCNICA Y DIAGNÓSTICO 2 ARTEFACTOS",
      cashPrice: 135000,
      monthlyPrice: 13500,
    },
    {
      name: "ASISTENCIA TÉCNICA Y DIAGNÓSTICO 3 ARTEFACTOS O MÁS",
      cashPrice: 180000,
      monthlyPrice: 18000,
    },
    {
      name: "ESTUFA INDUSTRIAL 1 PUESTO - MARMITA",
      cashPrice: 190000,
      monthlyPrice: 19000,
    },
    {
      name: "ESTUFA INDUSTRIAL 2 Y 3 PUESTOS",
      cashPrice: 280000,
      monthlyPrice: 28000,
    },
    {
      name: "ESTUFA INDUSTRIAL 4",
      cashPrice: 360000,
      monthlyPrice: 36000,
    },
    {
      name: "ESTUFA INDUSTRIAL 5 Y 6 PUESTO Y EN ADELANTE",
      cashPrice: 450000,
      monthlyPrice: 45000,
    },
    {
      name: "GREGA-BBQ-WOK-PLANCHA-SALAMANDRA-GRATINADORA",
      cashPrice: 220000,
      monthlyPrice: 22000,
    },
    {
      name: "CUARTO DE CRECIMIENTO",
      cashPrice: 450000,
      monthlyPrice: 45000,
    },
    {
      name: "CALDERA DE LAVANDERÍA",
      cashPrice: 450000,
      monthlyPrice: 45000,
    },
    {
      name: "FREIDORA",
      cashPrice: 280000,
      monthlyPrice: 28000,
    },
    {
      name: "HORNO 2 BANDEJAS",
      cashPrice: 220000,
      monthlyPrice: 22000,
    },
    {
      name: "HORNO 6 BANDEJAS",
      cashPrice: 380000,
      monthlyPrice: 38000,
    },
    {
      name: "HORNO 10 BANDEJAS",
      cashPrice: 470000,
      monthlyPrice: 47000,
    },
  ],
};

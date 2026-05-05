import React from 'react';
import { Check, Minus } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Badge } from '../ui/Badge';
import styles from './ProductComparison.module.css';

type Cell = boolean | string;

interface RowDef {
    feature: string;
    fiscalidad: Cell;
    energydeal: Cell;
    presupuestador: Cell;
    erp: Cell;
}

const ROWS: RowDef[] = [
    { feature: 'Sector principal',          fiscalidad: 'Asesorías y autónomos', energydeal: 'Energético B2B',   presupuestador: 'Construcción y reformas', erp: 'Agencias y servicios' },
    { feature: 'Suscripción mensual fija',  fiscalidad: true,  energydeal: true,  presupuestador: true,  erp: true },
    { feature: 'Multi-cliente / multi-tenant', fiscalidad: true, energydeal: true, presupuestador: true, erp: true },
    { feature: 'Estándares españoles nativos', fiscalidad: 'AEAT, SII, VeriFactu, PGC', energydeal: 'CUPS, CIF, IVA energético', presupuestador: 'BC3/FIEBDC, certificaciones', erp: 'Facturación + retenciones IRPF' },
    { feature: 'App móvil',                 fiscalidad: true,  energydeal: false, presupuestador: 'Web responsiva', erp: 'Web responsiva' },
    { feature: 'Asistente IA integrado',    fiscalidad: 'Fiscal',  energydeal: false, presupuestador: 'OCR',   erp: 'MCP · 31+ herramientas' },
    { feature: 'Firma digital del cliente', fiscalidad: false, energydeal: false, presupuestador: true,  erp: true },
    { feature: 'Estado actual',             fiscalidad: 'En producción', energydeal: 'En producción', presupuestador: 'Beta', erp: 'En producción' },
];

const PRODUCTS = [
    { id: 'fiscalidad' as const,     name: 'Fiscalidad',      tagline: 'AEAT · SII · VeriFactu' },
    { id: 'energydeal' as const,     name: 'EnergyDeal',      tagline: 'CRM energético' },
    { id: 'presupuestador' as const, name: 'Presupuestador',  tagline: 'BC3 · obra' },
    { id: 'erp' as const,            name: 'ERP OpsPilot',    tagline: 'Servicios + IA' },
];

const renderCell = (c: Cell) => {
    if (c === true) return <Check size={18} strokeWidth={2.4} className={styles.check} aria-label="Sí" />;
    if (c === false) return <Minus size={18} strokeWidth={2.4} className={styles.dash} aria-label="No" />;
    return <span className={styles.textCell}>{c}</span>;
};

export const ProductComparison: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <Eyebrow>Comparativa</Eyebrow>
                <h2 className={styles.title}>¿Cuál de los productos encaja con tu caso?</h2>
                <p className={styles.subtitle}>
                    Cada uno está pensado para un sector concreto. Si tu operativa cae en
                    varios o no cae en ninguno, lo construimos a medida.
                </p>
            </div>

            <div className={styles.tableScroll}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.featureHead} scope="col">
                                <span className={styles.headLabel}>Feature</span>
                            </th>
                            {PRODUCTS.map((p) => (
                                <th key={p.id} className={styles.productHead} scope="col">
                                    <div className={styles.productHeadInner}>
                                        <span className={styles.productName}>{p.name}</span>
                                        <span className={styles.productTag}>{p.tagline}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ROWS.map((r, i) => (
                            <tr key={i}>
                                <th scope="row" className={styles.featureCell}>{r.feature}</th>
                                <td className={styles.cell}>{renderCell(r.fiscalidad)}</td>
                                <td className={styles.cell}>{renderCell(r.energydeal)}</td>
                                <td className={styles.cell}>{renderCell(r.presupuestador)}</td>
                                <td className={styles.cell}>{renderCell(r.erp)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.legend}>
                <Badge tone="mint" variant="soft" dot>En producción</Badge>
                <Badge tone="warm" variant="soft" dot>Beta</Badge>
                <Badge tone="neutral" variant="soft">Próximamente</Badge>
            </div>
        </div>
    );
};

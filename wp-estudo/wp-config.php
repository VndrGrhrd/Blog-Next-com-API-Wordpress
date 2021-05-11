<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpAPI-estudo' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fbEF]l 2f.P(aZF7ks%~!X[CzeMIUDCIl-Av.[-~NDj:0~Ssp~,Q.pjI8C(arB3M' );
define( 'SECURE_AUTH_KEY',  ' +N~Rnz_QLsGK#dh:0N3 JF)$W7s^fsiUqt0V*gF+4z#X2Umc<Grdr&o.:)NPI,/' );
define( 'LOGGED_IN_KEY',    '2uKo7*E#UFKERSnY1-5|7qT%k;+<I7hmmJC)Ki7|![e]Y3M`ar[(^;8(zfzS0{&A' );
define( 'NONCE_KEY',        'vGfk)BV*a~4hHr9CEiS|UNwp0RdLb_4(^i4R51}R$%:J9xc$pT47BwSY%N:G,Gi&' );
define( 'AUTH_SALT',        's:tD!>rRcPgvG-ZqzuE6OB,Hw9Of:79Q0T-Ip$P3l5cL`cM2}T=b(HiDUS%f_Tm*' );
define( 'SECURE_AUTH_SALT', '^h)K^a`qo3WG4hi2K;k8}W;}=|xzbKPu^;[ec~]W-$.pR6`g1zyE6j[uIz3bl+?G' );
define( 'LOGGED_IN_SALT',   'ijZsBM/U|>f[g7|9G%kxhQk}Hz9MV+L[[wKEH(D0*@It/-8kG%cPr9iD.),QN8.B' );
define( 'NONCE_SALT',       '<tEF-+zZGDZ#8spKLfBVoO}cM+7b#O5s,!:J[jEAnZYx^Nt@v8 nW NTHc)X]R>a' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

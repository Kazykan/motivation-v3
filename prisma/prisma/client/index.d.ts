
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ParentUser
 * 
 */
export type ParentUser = $Result.DefaultSelection<Prisma.$ParentUserPayload>
/**
 * Model ChildUser
 * 
 */
export type ChildUser = $Result.DefaultSelection<Prisma.$ChildUserPayload>
/**
 * Model ParentChild
 * 
 */
export type ParentChild = $Result.DefaultSelection<Prisma.$ParentChildPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskCompletion
 * 
 */
export type TaskCompletion = $Result.DefaultSelection<Prisma.$TaskCompletionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const TaskType: {
  DAILY: 'DAILY',
  FLEXIBLE: 'FLEXIBLE'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ParentUsers
 * const parentUsers = await prisma.parentUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ParentUsers
   * const parentUsers = await prisma.parentUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.parentUser`: Exposes CRUD operations for the **ParentUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParentUsers
    * const parentUsers = await prisma.parentUser.findMany()
    * ```
    */
  get parentUser(): Prisma.ParentUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.childUser`: Exposes CRUD operations for the **ChildUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChildUsers
    * const childUsers = await prisma.childUser.findMany()
    * ```
    */
  get childUser(): Prisma.ChildUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parentChild`: Exposes CRUD operations for the **ParentChild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParentChildren
    * const parentChildren = await prisma.parentChild.findMany()
    * ```
    */
  get parentChild(): Prisma.ParentChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskCompletion`: Exposes CRUD operations for the **TaskCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskCompletions
    * const taskCompletions = await prisma.taskCompletion.findMany()
    * ```
    */
  get taskCompletion(): Prisma.TaskCompletionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ParentUser: 'ParentUser',
    ChildUser: 'ChildUser',
    ParentChild: 'ParentChild',
    Task: 'Task',
    TaskCompletion: 'TaskCompletion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "parentUser" | "childUser" | "parentChild" | "task" | "taskCompletion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ParentUser: {
        payload: Prisma.$ParentUserPayload<ExtArgs>
        fields: Prisma.ParentUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>
          }
          findFirst: {
            args: Prisma.ParentUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>
          }
          findMany: {
            args: Prisma.ParentUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>[]
          }
          create: {
            args: Prisma.ParentUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>
          }
          createMany: {
            args: Prisma.ParentUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>[]
          }
          delete: {
            args: Prisma.ParentUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>
          }
          update: {
            args: Prisma.ParentUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>
          }
          deleteMany: {
            args: Prisma.ParentUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>[]
          }
          upsert: {
            args: Prisma.ParentUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentUserPayload>
          }
          aggregate: {
            args: Prisma.ParentUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParentUser>
          }
          groupBy: {
            args: Prisma.ParentUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentUserCountArgs<ExtArgs>
            result: $Utils.Optional<ParentUserCountAggregateOutputType> | number
          }
        }
      }
      ChildUser: {
        payload: Prisma.$ChildUserPayload<ExtArgs>
        fields: Prisma.ChildUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChildUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChildUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>
          }
          findFirst: {
            args: Prisma.ChildUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChildUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>
          }
          findMany: {
            args: Prisma.ChildUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>[]
          }
          create: {
            args: Prisma.ChildUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>
          }
          createMany: {
            args: Prisma.ChildUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChildUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>[]
          }
          delete: {
            args: Prisma.ChildUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>
          }
          update: {
            args: Prisma.ChildUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>
          }
          deleteMany: {
            args: Prisma.ChildUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChildUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChildUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>[]
          }
          upsert: {
            args: Prisma.ChildUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChildUserPayload>
          }
          aggregate: {
            args: Prisma.ChildUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChildUser>
          }
          groupBy: {
            args: Prisma.ChildUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChildUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChildUserCountArgs<ExtArgs>
            result: $Utils.Optional<ChildUserCountAggregateOutputType> | number
          }
        }
      }
      ParentChild: {
        payload: Prisma.$ParentChildPayload<ExtArgs>
        fields: Prisma.ParentChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          findFirst: {
            args: Prisma.ParentChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          findMany: {
            args: Prisma.ParentChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          create: {
            args: Prisma.ParentChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          createMany: {
            args: Prisma.ParentChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          delete: {
            args: Prisma.ParentChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          update: {
            args: Prisma.ParentChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          deleteMany: {
            args: Prisma.ParentChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          upsert: {
            args: Prisma.ParentChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          aggregate: {
            args: Prisma.ParentChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParentChild>
          }
          groupBy: {
            args: Prisma.ParentChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentChildCountArgs<ExtArgs>
            result: $Utils.Optional<ParentChildCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskCompletion: {
        payload: Prisma.$TaskCompletionPayload<ExtArgs>
        fields: Prisma.TaskCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          findFirst: {
            args: Prisma.TaskCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          findMany: {
            args: Prisma.TaskCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>[]
          }
          create: {
            args: Prisma.TaskCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          createMany: {
            args: Prisma.TaskCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>[]
          }
          delete: {
            args: Prisma.TaskCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          update: {
            args: Prisma.TaskCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          deleteMany: {
            args: Prisma.TaskCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskCompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>[]
          }
          upsert: {
            args: Prisma.TaskCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCompletionPayload>
          }
          aggregate: {
            args: Prisma.TaskCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskCompletion>
          }
          groupBy: {
            args: Prisma.TaskCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCompletionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    parentUser?: ParentUserOmit
    childUser?: ChildUserOmit
    parentChild?: ParentChildOmit
    task?: TaskOmit
    taskCompletion?: TaskCompletionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ParentUserCountOutputType
   */

  export type ParentUserCountOutputType = {
    children: number
    updatedTasks: number
  }

  export type ParentUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ParentUserCountOutputTypeCountChildrenArgs
    updatedTasks?: boolean | ParentUserCountOutputTypeCountUpdatedTasksArgs
  }

  // Custom InputTypes
  /**
   * ParentUserCountOutputType without action
   */
  export type ParentUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUserCountOutputType
     */
    select?: ParentUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentUserCountOutputType without action
   */
  export type ParentUserCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
  }

  /**
   * ParentUserCountOutputType without action
   */
  export type ParentUserCountOutputTypeCountUpdatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ChildUserCountOutputType
   */

  export type ChildUserCountOutputType = {
    parents: number
    tasks: number
    taskCompletions: number
  }

  export type ChildUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parents?: boolean | ChildUserCountOutputTypeCountParentsArgs
    tasks?: boolean | ChildUserCountOutputTypeCountTasksArgs
    taskCompletions?: boolean | ChildUserCountOutputTypeCountTaskCompletionsArgs
  }

  // Custom InputTypes
  /**
   * ChildUserCountOutputType without action
   */
  export type ChildUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUserCountOutputType
     */
    select?: ChildUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChildUserCountOutputType without action
   */
  export type ChildUserCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
  }

  /**
   * ChildUserCountOutputType without action
   */
  export type ChildUserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ChildUserCountOutputType without action
   */
  export type ChildUserCountOutputTypeCountTaskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCompletionWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    taskCompletions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskCompletions?: boolean | TaskCountOutputTypeCountTaskCompletionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCompletionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ParentUser
   */

  export type AggregateParentUser = {
    _count: ParentUserCountAggregateOutputType | null
    _avg: ParentUserAvgAggregateOutputType | null
    _sum: ParentUserSumAggregateOutputType | null
    _min: ParentUserMinAggregateOutputType | null
    _max: ParentUserMaxAggregateOutputType | null
  }

  export type ParentUserAvgAggregateOutputType = {
    id: number | null
  }

  export type ParentUserSumAggregateOutputType = {
    id: number | null
  }

  export type ParentUserMinAggregateOutputType = {
    id: number | null
    telegram_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    photo_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentUserMaxAggregateOutputType = {
    id: number | null
    telegram_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    photo_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParentUserCountAggregateOutputType = {
    id: number
    telegram_id: number
    name: number
    gender: number
    photo_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParentUserAvgAggregateInputType = {
    id?: true
  }

  export type ParentUserSumAggregateInputType = {
    id?: true
  }

  export type ParentUserMinAggregateInputType = {
    id?: true
    telegram_id?: true
    name?: true
    gender?: true
    photo_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentUserMaxAggregateInputType = {
    id?: true
    telegram_id?: true
    name?: true
    gender?: true
    photo_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParentUserCountAggregateInputType = {
    id?: true
    telegram_id?: true
    name?: true
    gender?: true
    photo_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParentUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentUser to aggregate.
     */
    where?: ParentUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentUsers to fetch.
     */
    orderBy?: ParentUserOrderByWithRelationInput | ParentUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParentUsers
    **/
    _count?: true | ParentUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentUserMaxAggregateInputType
  }

  export type GetParentUserAggregateType<T extends ParentUserAggregateArgs> = {
        [P in keyof T & keyof AggregateParentUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParentUser[P]>
      : GetScalarType<T[P], AggregateParentUser[P]>
  }




  export type ParentUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentUserWhereInput
    orderBy?: ParentUserOrderByWithAggregationInput | ParentUserOrderByWithAggregationInput[]
    by: ParentUserScalarFieldEnum[] | ParentUserScalarFieldEnum
    having?: ParentUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentUserCountAggregateInputType | true
    _avg?: ParentUserAvgAggregateInputType
    _sum?: ParentUserSumAggregateInputType
    _min?: ParentUserMinAggregateInputType
    _max?: ParentUserMaxAggregateInputType
  }

  export type ParentUserGroupByOutputType = {
    id: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParentUserCountAggregateOutputType | null
    _avg: ParentUserAvgAggregateOutputType | null
    _sum: ParentUserSumAggregateOutputType | null
    _min: ParentUserMinAggregateOutputType | null
    _max: ParentUserMaxAggregateOutputType | null
  }

  type GetParentUserGroupByPayload<T extends ParentUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentUserGroupByOutputType[P]>
            : GetScalarType<T[P], ParentUserGroupByOutputType[P]>
        }
      >
    >


  export type ParentUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    children?: boolean | ParentUser$childrenArgs<ExtArgs>
    updatedTasks?: boolean | ParentUser$updatedTasksArgs<ExtArgs>
    _count?: boolean | ParentUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentUser"]>

  export type ParentUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parentUser"]>

  export type ParentUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parentUser"]>

  export type ParentUserSelectScalar = {
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParentUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegram_id" | "name" | "gender" | "photo_url" | "createdAt" | "updatedAt", ExtArgs["result"]["parentUser"]>
  export type ParentUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ParentUser$childrenArgs<ExtArgs>
    updatedTasks?: boolean | ParentUser$updatedTasksArgs<ExtArgs>
    _count?: boolean | ParentUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParentUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParentUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParentUser"
    objects: {
      children: Prisma.$ParentChildPayload<ExtArgs>[]
      updatedTasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telegram_id: string
      name: string
      gender: $Enums.Gender
      photo_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parentUser"]>
    composites: {}
  }

  type ParentUserGetPayload<S extends boolean | null | undefined | ParentUserDefaultArgs> = $Result.GetResult<Prisma.$ParentUserPayload, S>

  type ParentUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentUserCountAggregateInputType | true
    }

  export interface ParentUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParentUser'], meta: { name: 'ParentUser' } }
    /**
     * Find zero or one ParentUser that matches the filter.
     * @param {ParentUserFindUniqueArgs} args - Arguments to find a ParentUser
     * @example
     * // Get one ParentUser
     * const parentUser = await prisma.parentUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentUserFindUniqueArgs>(args: SelectSubset<T, ParentUserFindUniqueArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ParentUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentUserFindUniqueOrThrowArgs} args - Arguments to find a ParentUser
     * @example
     * // Get one ParentUser
     * const parentUser = await prisma.parentUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ParentUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUserFindFirstArgs} args - Arguments to find a ParentUser
     * @example
     * // Get one ParentUser
     * const parentUser = await prisma.parentUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentUserFindFirstArgs>(args?: SelectSubset<T, ParentUserFindFirstArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ParentUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUserFindFirstOrThrowArgs} args - Arguments to find a ParentUser
     * @example
     * // Get one ParentUser
     * const parentUser = await prisma.parentUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ParentUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParentUsers
     * const parentUsers = await prisma.parentUser.findMany()
     * 
     * // Get first 10 ParentUsers
     * const parentUsers = await prisma.parentUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentUserWithIdOnly = await prisma.parentUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentUserFindManyArgs>(args?: SelectSubset<T, ParentUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ParentUser.
     * @param {ParentUserCreateArgs} args - Arguments to create a ParentUser.
     * @example
     * // Create one ParentUser
     * const ParentUser = await prisma.parentUser.create({
     *   data: {
     *     // ... data to create a ParentUser
     *   }
     * })
     * 
     */
    create<T extends ParentUserCreateArgs>(args: SelectSubset<T, ParentUserCreateArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ParentUsers.
     * @param {ParentUserCreateManyArgs} args - Arguments to create many ParentUsers.
     * @example
     * // Create many ParentUsers
     * const parentUser = await prisma.parentUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentUserCreateManyArgs>(args?: SelectSubset<T, ParentUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParentUsers and returns the data saved in the database.
     * @param {ParentUserCreateManyAndReturnArgs} args - Arguments to create many ParentUsers.
     * @example
     * // Create many ParentUsers
     * const parentUser = await prisma.parentUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParentUsers and only return the `id`
     * const parentUserWithIdOnly = await prisma.parentUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ParentUser.
     * @param {ParentUserDeleteArgs} args - Arguments to delete one ParentUser.
     * @example
     * // Delete one ParentUser
     * const ParentUser = await prisma.parentUser.delete({
     *   where: {
     *     // ... filter to delete one ParentUser
     *   }
     * })
     * 
     */
    delete<T extends ParentUserDeleteArgs>(args: SelectSubset<T, ParentUserDeleteArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ParentUser.
     * @param {ParentUserUpdateArgs} args - Arguments to update one ParentUser.
     * @example
     * // Update one ParentUser
     * const parentUser = await prisma.parentUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUserUpdateArgs>(args: SelectSubset<T, ParentUserUpdateArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ParentUsers.
     * @param {ParentUserDeleteManyArgs} args - Arguments to filter ParentUsers to delete.
     * @example
     * // Delete a few ParentUsers
     * const { count } = await prisma.parentUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentUserDeleteManyArgs>(args?: SelectSubset<T, ParentUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParentUsers
     * const parentUser = await prisma.parentUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUserUpdateManyArgs>(args: SelectSubset<T, ParentUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentUsers and returns the data updated in the database.
     * @param {ParentUserUpdateManyAndReturnArgs} args - Arguments to update many ParentUsers.
     * @example
     * // Update many ParentUsers
     * const parentUser = await prisma.parentUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParentUsers and only return the `id`
     * const parentUserWithIdOnly = await prisma.parentUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParentUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ParentUser.
     * @param {ParentUserUpsertArgs} args - Arguments to update or create a ParentUser.
     * @example
     * // Update or create a ParentUser
     * const parentUser = await prisma.parentUser.upsert({
     *   create: {
     *     // ... data to create a ParentUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParentUser we want to update
     *   }
     * })
     */
    upsert<T extends ParentUserUpsertArgs>(args: SelectSubset<T, ParentUserUpsertArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ParentUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUserCountArgs} args - Arguments to filter ParentUsers to count.
     * @example
     * // Count the number of ParentUsers
     * const count = await prisma.parentUser.count({
     *   where: {
     *     // ... the filter for the ParentUsers we want to count
     *   }
     * })
    **/
    count<T extends ParentUserCountArgs>(
      args?: Subset<T, ParentUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParentUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentUserAggregateArgs>(args: Subset<T, ParentUserAggregateArgs>): Prisma.PrismaPromise<GetParentUserAggregateType<T>>

    /**
     * Group by ParentUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentUserGroupByArgs['orderBy'] }
        : { orderBy?: ParentUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParentUser model
   */
  readonly fields: ParentUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParentUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    children<T extends ParentUser$childrenArgs<ExtArgs> = {}>(args?: Subset<T, ParentUser$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    updatedTasks<T extends ParentUser$updatedTasksArgs<ExtArgs> = {}>(args?: Subset<T, ParentUser$updatedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParentUser model
   */ 
  interface ParentUserFieldRefs {
    readonly id: FieldRef<"ParentUser", 'Int'>
    readonly telegram_id: FieldRef<"ParentUser", 'String'>
    readonly name: FieldRef<"ParentUser", 'String'>
    readonly gender: FieldRef<"ParentUser", 'Gender'>
    readonly photo_url: FieldRef<"ParentUser", 'String'>
    readonly createdAt: FieldRef<"ParentUser", 'DateTime'>
    readonly updatedAt: FieldRef<"ParentUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParentUser findUnique
   */
  export type ParentUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * Filter, which ParentUser to fetch.
     */
    where: ParentUserWhereUniqueInput
  }

  /**
   * ParentUser findUniqueOrThrow
   */
  export type ParentUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * Filter, which ParentUser to fetch.
     */
    where: ParentUserWhereUniqueInput
  }

  /**
   * ParentUser findFirst
   */
  export type ParentUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * Filter, which ParentUser to fetch.
     */
    where?: ParentUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentUsers to fetch.
     */
    orderBy?: ParentUserOrderByWithRelationInput | ParentUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentUsers.
     */
    cursor?: ParentUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentUsers.
     */
    distinct?: ParentUserScalarFieldEnum | ParentUserScalarFieldEnum[]
  }

  /**
   * ParentUser findFirstOrThrow
   */
  export type ParentUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * Filter, which ParentUser to fetch.
     */
    where?: ParentUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentUsers to fetch.
     */
    orderBy?: ParentUserOrderByWithRelationInput | ParentUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentUsers.
     */
    cursor?: ParentUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentUsers.
     */
    distinct?: ParentUserScalarFieldEnum | ParentUserScalarFieldEnum[]
  }

  /**
   * ParentUser findMany
   */
  export type ParentUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * Filter, which ParentUsers to fetch.
     */
    where?: ParentUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentUsers to fetch.
     */
    orderBy?: ParentUserOrderByWithRelationInput | ParentUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParentUsers.
     */
    cursor?: ParentUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentUsers.
     */
    skip?: number
    distinct?: ParentUserScalarFieldEnum | ParentUserScalarFieldEnum[]
  }

  /**
   * ParentUser create
   */
  export type ParentUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ParentUser.
     */
    data: XOR<ParentUserCreateInput, ParentUserUncheckedCreateInput>
  }

  /**
   * ParentUser createMany
   */
  export type ParentUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParentUsers.
     */
    data: ParentUserCreateManyInput | ParentUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParentUser createManyAndReturn
   */
  export type ParentUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * The data used to create many ParentUsers.
     */
    data: ParentUserCreateManyInput | ParentUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParentUser update
   */
  export type ParentUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ParentUser.
     */
    data: XOR<ParentUserUpdateInput, ParentUserUncheckedUpdateInput>
    /**
     * Choose, which ParentUser to update.
     */
    where: ParentUserWhereUniqueInput
  }

  /**
   * ParentUser updateMany
   */
  export type ParentUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParentUsers.
     */
    data: XOR<ParentUserUpdateManyMutationInput, ParentUserUncheckedUpdateManyInput>
    /**
     * Filter which ParentUsers to update
     */
    where?: ParentUserWhereInput
  }

  /**
   * ParentUser updateManyAndReturn
   */
  export type ParentUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * The data used to update ParentUsers.
     */
    data: XOR<ParentUserUpdateManyMutationInput, ParentUserUncheckedUpdateManyInput>
    /**
     * Filter which ParentUsers to update
     */
    where?: ParentUserWhereInput
  }

  /**
   * ParentUser upsert
   */
  export type ParentUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ParentUser to update in case it exists.
     */
    where: ParentUserWhereUniqueInput
    /**
     * In case the ParentUser found by the `where` argument doesn't exist, create a new ParentUser with this data.
     */
    create: XOR<ParentUserCreateInput, ParentUserUncheckedCreateInput>
    /**
     * In case the ParentUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUserUpdateInput, ParentUserUncheckedUpdateInput>
  }

  /**
   * ParentUser delete
   */
  export type ParentUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    /**
     * Filter which ParentUser to delete.
     */
    where: ParentUserWhereUniqueInput
  }

  /**
   * ParentUser deleteMany
   */
  export type ParentUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentUsers to delete
     */
    where?: ParentUserWhereInput
  }

  /**
   * ParentUser.children
   */
  export type ParentUser$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    cursor?: ParentChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentUser.updatedTasks
   */
  export type ParentUser$updatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ParentUser without action
   */
  export type ParentUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
  }


  /**
   * Model ChildUser
   */

  export type AggregateChildUser = {
    _count: ChildUserCountAggregateOutputType | null
    _avg: ChildUserAvgAggregateOutputType | null
    _sum: ChildUserSumAggregateOutputType | null
    _min: ChildUserMinAggregateOutputType | null
    _max: ChildUserMaxAggregateOutputType | null
  }

  export type ChildUserAvgAggregateOutputType = {
    id: number | null
  }

  export type ChildUserSumAggregateOutputType = {
    id: number | null
  }

  export type ChildUserMinAggregateOutputType = {
    id: number | null
    telegram_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    photo_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChildUserMaxAggregateOutputType = {
    id: number | null
    telegram_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    photo_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChildUserCountAggregateOutputType = {
    id: number
    telegram_id: number
    name: number
    gender: number
    photo_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChildUserAvgAggregateInputType = {
    id?: true
  }

  export type ChildUserSumAggregateInputType = {
    id?: true
  }

  export type ChildUserMinAggregateInputType = {
    id?: true
    telegram_id?: true
    name?: true
    gender?: true
    photo_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChildUserMaxAggregateInputType = {
    id?: true
    telegram_id?: true
    name?: true
    gender?: true
    photo_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChildUserCountAggregateInputType = {
    id?: true
    telegram_id?: true
    name?: true
    gender?: true
    photo_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChildUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChildUser to aggregate.
     */
    where?: ChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChildUsers to fetch.
     */
    orderBy?: ChildUserOrderByWithRelationInput | ChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChildUsers
    **/
    _count?: true | ChildUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChildUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChildUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChildUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChildUserMaxAggregateInputType
  }

  export type GetChildUserAggregateType<T extends ChildUserAggregateArgs> = {
        [P in keyof T & keyof AggregateChildUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChildUser[P]>
      : GetScalarType<T[P], AggregateChildUser[P]>
  }




  export type ChildUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChildUserWhereInput
    orderBy?: ChildUserOrderByWithAggregationInput | ChildUserOrderByWithAggregationInput[]
    by: ChildUserScalarFieldEnum[] | ChildUserScalarFieldEnum
    having?: ChildUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChildUserCountAggregateInputType | true
    _avg?: ChildUserAvgAggregateInputType
    _sum?: ChildUserSumAggregateInputType
    _min?: ChildUserMinAggregateInputType
    _max?: ChildUserMaxAggregateInputType
  }

  export type ChildUserGroupByOutputType = {
    id: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChildUserCountAggregateOutputType | null
    _avg: ChildUserAvgAggregateOutputType | null
    _sum: ChildUserSumAggregateOutputType | null
    _min: ChildUserMinAggregateOutputType | null
    _max: ChildUserMaxAggregateOutputType | null
  }

  type GetChildUserGroupByPayload<T extends ChildUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChildUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChildUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChildUserGroupByOutputType[P]>
            : GetScalarType<T[P], ChildUserGroupByOutputType[P]>
        }
      >
    >


  export type ChildUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parents?: boolean | ChildUser$parentsArgs<ExtArgs>
    tasks?: boolean | ChildUser$tasksArgs<ExtArgs>
    taskCompletions?: boolean | ChildUser$taskCompletionsArgs<ExtArgs>
    _count?: boolean | ChildUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["childUser"]>

  export type ChildUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["childUser"]>

  export type ChildUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["childUser"]>

  export type ChildUserSelectScalar = {
    id?: boolean
    telegram_id?: boolean
    name?: boolean
    gender?: boolean
    photo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChildUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegram_id" | "name" | "gender" | "photo_url" | "createdAt" | "updatedAt", ExtArgs["result"]["childUser"]>
  export type ChildUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parents?: boolean | ChildUser$parentsArgs<ExtArgs>
    tasks?: boolean | ChildUser$tasksArgs<ExtArgs>
    taskCompletions?: boolean | ChildUser$taskCompletionsArgs<ExtArgs>
    _count?: boolean | ChildUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChildUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChildUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChildUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChildUser"
    objects: {
      parents: Prisma.$ParentChildPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      taskCompletions: Prisma.$TaskCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telegram_id: string
      name: string
      gender: $Enums.Gender
      photo_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["childUser"]>
    composites: {}
  }

  type ChildUserGetPayload<S extends boolean | null | undefined | ChildUserDefaultArgs> = $Result.GetResult<Prisma.$ChildUserPayload, S>

  type ChildUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChildUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChildUserCountAggregateInputType | true
    }

  export interface ChildUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChildUser'], meta: { name: 'ChildUser' } }
    /**
     * Find zero or one ChildUser that matches the filter.
     * @param {ChildUserFindUniqueArgs} args - Arguments to find a ChildUser
     * @example
     * // Get one ChildUser
     * const childUser = await prisma.childUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChildUserFindUniqueArgs>(args: SelectSubset<T, ChildUserFindUniqueArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ChildUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChildUserFindUniqueOrThrowArgs} args - Arguments to find a ChildUser
     * @example
     * // Get one ChildUser
     * const childUser = await prisma.childUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChildUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ChildUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ChildUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUserFindFirstArgs} args - Arguments to find a ChildUser
     * @example
     * // Get one ChildUser
     * const childUser = await prisma.childUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChildUserFindFirstArgs>(args?: SelectSubset<T, ChildUserFindFirstArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ChildUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUserFindFirstOrThrowArgs} args - Arguments to find a ChildUser
     * @example
     * // Get one ChildUser
     * const childUser = await prisma.childUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChildUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ChildUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ChildUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChildUsers
     * const childUsers = await prisma.childUser.findMany()
     * 
     * // Get first 10 ChildUsers
     * const childUsers = await prisma.childUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const childUserWithIdOnly = await prisma.childUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChildUserFindManyArgs>(args?: SelectSubset<T, ChildUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ChildUser.
     * @param {ChildUserCreateArgs} args - Arguments to create a ChildUser.
     * @example
     * // Create one ChildUser
     * const ChildUser = await prisma.childUser.create({
     *   data: {
     *     // ... data to create a ChildUser
     *   }
     * })
     * 
     */
    create<T extends ChildUserCreateArgs>(args: SelectSubset<T, ChildUserCreateArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ChildUsers.
     * @param {ChildUserCreateManyArgs} args - Arguments to create many ChildUsers.
     * @example
     * // Create many ChildUsers
     * const childUser = await prisma.childUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChildUserCreateManyArgs>(args?: SelectSubset<T, ChildUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChildUsers and returns the data saved in the database.
     * @param {ChildUserCreateManyAndReturnArgs} args - Arguments to create many ChildUsers.
     * @example
     * // Create many ChildUsers
     * const childUser = await prisma.childUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChildUsers and only return the `id`
     * const childUserWithIdOnly = await prisma.childUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChildUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ChildUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ChildUser.
     * @param {ChildUserDeleteArgs} args - Arguments to delete one ChildUser.
     * @example
     * // Delete one ChildUser
     * const ChildUser = await prisma.childUser.delete({
     *   where: {
     *     // ... filter to delete one ChildUser
     *   }
     * })
     * 
     */
    delete<T extends ChildUserDeleteArgs>(args: SelectSubset<T, ChildUserDeleteArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ChildUser.
     * @param {ChildUserUpdateArgs} args - Arguments to update one ChildUser.
     * @example
     * // Update one ChildUser
     * const childUser = await prisma.childUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChildUserUpdateArgs>(args: SelectSubset<T, ChildUserUpdateArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ChildUsers.
     * @param {ChildUserDeleteManyArgs} args - Arguments to filter ChildUsers to delete.
     * @example
     * // Delete a few ChildUsers
     * const { count } = await prisma.childUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChildUserDeleteManyArgs>(args?: SelectSubset<T, ChildUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChildUsers
     * const childUser = await prisma.childUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChildUserUpdateManyArgs>(args: SelectSubset<T, ChildUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChildUsers and returns the data updated in the database.
     * @param {ChildUserUpdateManyAndReturnArgs} args - Arguments to update many ChildUsers.
     * @example
     * // Update many ChildUsers
     * const childUser = await prisma.childUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChildUsers and only return the `id`
     * const childUserWithIdOnly = await prisma.childUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChildUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ChildUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ChildUser.
     * @param {ChildUserUpsertArgs} args - Arguments to update or create a ChildUser.
     * @example
     * // Update or create a ChildUser
     * const childUser = await prisma.childUser.upsert({
     *   create: {
     *     // ... data to create a ChildUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChildUser we want to update
     *   }
     * })
     */
    upsert<T extends ChildUserUpsertArgs>(args: SelectSubset<T, ChildUserUpsertArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ChildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUserCountArgs} args - Arguments to filter ChildUsers to count.
     * @example
     * // Count the number of ChildUsers
     * const count = await prisma.childUser.count({
     *   where: {
     *     // ... the filter for the ChildUsers we want to count
     *   }
     * })
    **/
    count<T extends ChildUserCountArgs>(
      args?: Subset<T, ChildUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChildUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChildUserAggregateArgs>(args: Subset<T, ChildUserAggregateArgs>): Prisma.PrismaPromise<GetChildUserAggregateType<T>>

    /**
     * Group by ChildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChildUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChildUserGroupByArgs['orderBy'] }
        : { orderBy?: ChildUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChildUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChildUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChildUser model
   */
  readonly fields: ChildUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChildUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChildUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parents<T extends ChildUser$parentsArgs<ExtArgs> = {}>(args?: Subset<T, ChildUser$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    tasks<T extends ChildUser$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ChildUser$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    taskCompletions<T extends ChildUser$taskCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, ChildUser$taskCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChildUser model
   */ 
  interface ChildUserFieldRefs {
    readonly id: FieldRef<"ChildUser", 'Int'>
    readonly telegram_id: FieldRef<"ChildUser", 'String'>
    readonly name: FieldRef<"ChildUser", 'String'>
    readonly gender: FieldRef<"ChildUser", 'Gender'>
    readonly photo_url: FieldRef<"ChildUser", 'String'>
    readonly createdAt: FieldRef<"ChildUser", 'DateTime'>
    readonly updatedAt: FieldRef<"ChildUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChildUser findUnique
   */
  export type ChildUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * Filter, which ChildUser to fetch.
     */
    where: ChildUserWhereUniqueInput
  }

  /**
   * ChildUser findUniqueOrThrow
   */
  export type ChildUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * Filter, which ChildUser to fetch.
     */
    where: ChildUserWhereUniqueInput
  }

  /**
   * ChildUser findFirst
   */
  export type ChildUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * Filter, which ChildUser to fetch.
     */
    where?: ChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChildUsers to fetch.
     */
    orderBy?: ChildUserOrderByWithRelationInput | ChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChildUsers.
     */
    cursor?: ChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChildUsers.
     */
    distinct?: ChildUserScalarFieldEnum | ChildUserScalarFieldEnum[]
  }

  /**
   * ChildUser findFirstOrThrow
   */
  export type ChildUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * Filter, which ChildUser to fetch.
     */
    where?: ChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChildUsers to fetch.
     */
    orderBy?: ChildUserOrderByWithRelationInput | ChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChildUsers.
     */
    cursor?: ChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChildUsers.
     */
    distinct?: ChildUserScalarFieldEnum | ChildUserScalarFieldEnum[]
  }

  /**
   * ChildUser findMany
   */
  export type ChildUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * Filter, which ChildUsers to fetch.
     */
    where?: ChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChildUsers to fetch.
     */
    orderBy?: ChildUserOrderByWithRelationInput | ChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChildUsers.
     */
    cursor?: ChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChildUsers.
     */
    skip?: number
    distinct?: ChildUserScalarFieldEnum | ChildUserScalarFieldEnum[]
  }

  /**
   * ChildUser create
   */
  export type ChildUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ChildUser.
     */
    data: XOR<ChildUserCreateInput, ChildUserUncheckedCreateInput>
  }

  /**
   * ChildUser createMany
   */
  export type ChildUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChildUsers.
     */
    data: ChildUserCreateManyInput | ChildUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChildUser createManyAndReturn
   */
  export type ChildUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * The data used to create many ChildUsers.
     */
    data: ChildUserCreateManyInput | ChildUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChildUser update
   */
  export type ChildUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ChildUser.
     */
    data: XOR<ChildUserUpdateInput, ChildUserUncheckedUpdateInput>
    /**
     * Choose, which ChildUser to update.
     */
    where: ChildUserWhereUniqueInput
  }

  /**
   * ChildUser updateMany
   */
  export type ChildUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChildUsers.
     */
    data: XOR<ChildUserUpdateManyMutationInput, ChildUserUncheckedUpdateManyInput>
    /**
     * Filter which ChildUsers to update
     */
    where?: ChildUserWhereInput
  }

  /**
   * ChildUser updateManyAndReturn
   */
  export type ChildUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * The data used to update ChildUsers.
     */
    data: XOR<ChildUserUpdateManyMutationInput, ChildUserUncheckedUpdateManyInput>
    /**
     * Filter which ChildUsers to update
     */
    where?: ChildUserWhereInput
  }

  /**
   * ChildUser upsert
   */
  export type ChildUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ChildUser to update in case it exists.
     */
    where: ChildUserWhereUniqueInput
    /**
     * In case the ChildUser found by the `where` argument doesn't exist, create a new ChildUser with this data.
     */
    create: XOR<ChildUserCreateInput, ChildUserUncheckedCreateInput>
    /**
     * In case the ChildUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChildUserUpdateInput, ChildUserUncheckedUpdateInput>
  }

  /**
   * ChildUser delete
   */
  export type ChildUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
    /**
     * Filter which ChildUser to delete.
     */
    where: ChildUserWhereUniqueInput
  }

  /**
   * ChildUser deleteMany
   */
  export type ChildUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChildUsers to delete
     */
    where?: ChildUserWhereInput
  }

  /**
   * ChildUser.parents
   */
  export type ChildUser$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    cursor?: ParentChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ChildUser.tasks
   */
  export type ChildUser$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ChildUser.taskCompletions
   */
  export type ChildUser$taskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    where?: TaskCompletionWhereInput
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    cursor?: TaskCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * ChildUser without action
   */
  export type ChildUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildUser
     */
    select?: ChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChildUser
     */
    omit?: ChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChildUserInclude<ExtArgs> | null
  }


  /**
   * Model ParentChild
   */

  export type AggregateParentChild = {
    _count: ParentChildCountAggregateOutputType | null
    _avg: ParentChildAvgAggregateOutputType | null
    _sum: ParentChildSumAggregateOutputType | null
    _min: ParentChildMinAggregateOutputType | null
    _max: ParentChildMaxAggregateOutputType | null
  }

  export type ParentChildAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    childId: number | null
  }

  export type ParentChildSumAggregateOutputType = {
    id: number | null
    parentId: number | null
    childId: number | null
  }

  export type ParentChildMinAggregateOutputType = {
    id: number | null
    parentId: number | null
    childId: number | null
  }

  export type ParentChildMaxAggregateOutputType = {
    id: number | null
    parentId: number | null
    childId: number | null
  }

  export type ParentChildCountAggregateOutputType = {
    id: number
    parentId: number
    childId: number
    _all: number
  }


  export type ParentChildAvgAggregateInputType = {
    id?: true
    parentId?: true
    childId?: true
  }

  export type ParentChildSumAggregateInputType = {
    id?: true
    parentId?: true
    childId?: true
  }

  export type ParentChildMinAggregateInputType = {
    id?: true
    parentId?: true
    childId?: true
  }

  export type ParentChildMaxAggregateInputType = {
    id?: true
    parentId?: true
    childId?: true
  }

  export type ParentChildCountAggregateInputType = {
    id?: true
    parentId?: true
    childId?: true
    _all?: true
  }

  export type ParentChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentChild to aggregate.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParentChildren
    **/
    _count?: true | ParentChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentChildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentChildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentChildMaxAggregateInputType
  }

  export type GetParentChildAggregateType<T extends ParentChildAggregateArgs> = {
        [P in keyof T & keyof AggregateParentChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParentChild[P]>
      : GetScalarType<T[P], AggregateParentChild[P]>
  }




  export type ParentChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithAggregationInput | ParentChildOrderByWithAggregationInput[]
    by: ParentChildScalarFieldEnum[] | ParentChildScalarFieldEnum
    having?: ParentChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentChildCountAggregateInputType | true
    _avg?: ParentChildAvgAggregateInputType
    _sum?: ParentChildSumAggregateInputType
    _min?: ParentChildMinAggregateInputType
    _max?: ParentChildMaxAggregateInputType
  }

  export type ParentChildGroupByOutputType = {
    id: number
    parentId: number
    childId: number
    _count: ParentChildCountAggregateOutputType | null
    _avg: ParentChildAvgAggregateOutputType | null
    _sum: ParentChildSumAggregateOutputType | null
    _min: ParentChildMinAggregateOutputType | null
    _max: ParentChildMaxAggregateOutputType | null
  }

  type GetParentChildGroupByPayload<T extends ParentChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentChildGroupByOutputType[P]>
            : GetScalarType<T[P], ParentChildGroupByOutputType[P]>
        }
      >
    >


  export type ParentChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    childId?: boolean
    parent?: boolean | ParentUserDefaultArgs<ExtArgs>
    child?: boolean | ChildUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    childId?: boolean
    parent?: boolean | ParentUserDefaultArgs<ExtArgs>
    child?: boolean | ChildUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    childId?: boolean
    parent?: boolean | ParentUserDefaultArgs<ExtArgs>
    child?: boolean | ChildUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectScalar = {
    id?: boolean
    parentId?: boolean
    childId?: boolean
  }

  export type ParentChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentId" | "childId", ExtArgs["result"]["parentChild"]>
  export type ParentChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentUserDefaultArgs<ExtArgs>
    child?: boolean | ChildUserDefaultArgs<ExtArgs>
  }
  export type ParentChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentUserDefaultArgs<ExtArgs>
    child?: boolean | ChildUserDefaultArgs<ExtArgs>
  }
  export type ParentChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | ParentUserDefaultArgs<ExtArgs>
    child?: boolean | ChildUserDefaultArgs<ExtArgs>
  }

  export type $ParentChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParentChild"
    objects: {
      parent: Prisma.$ParentUserPayload<ExtArgs>
      child: Prisma.$ChildUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parentId: number
      childId: number
    }, ExtArgs["result"]["parentChild"]>
    composites: {}
  }

  type ParentChildGetPayload<S extends boolean | null | undefined | ParentChildDefaultArgs> = $Result.GetResult<Prisma.$ParentChildPayload, S>

  type ParentChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentChildCountAggregateInputType | true
    }

  export interface ParentChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParentChild'], meta: { name: 'ParentChild' } }
    /**
     * Find zero or one ParentChild that matches the filter.
     * @param {ParentChildFindUniqueArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentChildFindUniqueArgs>(args: SelectSubset<T, ParentChildFindUniqueArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ParentChild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentChildFindUniqueOrThrowArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentChildFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ParentChild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindFirstArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentChildFindFirstArgs>(args?: SelectSubset<T, ParentChildFindFirstArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ParentChild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindFirstOrThrowArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentChildFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ParentChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParentChildren
     * const parentChildren = await prisma.parentChild.findMany()
     * 
     * // Get first 10 ParentChildren
     * const parentChildren = await prisma.parentChild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentChildWithIdOnly = await prisma.parentChild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentChildFindManyArgs>(args?: SelectSubset<T, ParentChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ParentChild.
     * @param {ParentChildCreateArgs} args - Arguments to create a ParentChild.
     * @example
     * // Create one ParentChild
     * const ParentChild = await prisma.parentChild.create({
     *   data: {
     *     // ... data to create a ParentChild
     *   }
     * })
     * 
     */
    create<T extends ParentChildCreateArgs>(args: SelectSubset<T, ParentChildCreateArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ParentChildren.
     * @param {ParentChildCreateManyArgs} args - Arguments to create many ParentChildren.
     * @example
     * // Create many ParentChildren
     * const parentChild = await prisma.parentChild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentChildCreateManyArgs>(args?: SelectSubset<T, ParentChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParentChildren and returns the data saved in the database.
     * @param {ParentChildCreateManyAndReturnArgs} args - Arguments to create many ParentChildren.
     * @example
     * // Create many ParentChildren
     * const parentChild = await prisma.parentChild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParentChildren and only return the `id`
     * const parentChildWithIdOnly = await prisma.parentChild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentChildCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ParentChild.
     * @param {ParentChildDeleteArgs} args - Arguments to delete one ParentChild.
     * @example
     * // Delete one ParentChild
     * const ParentChild = await prisma.parentChild.delete({
     *   where: {
     *     // ... filter to delete one ParentChild
     *   }
     * })
     * 
     */
    delete<T extends ParentChildDeleteArgs>(args: SelectSubset<T, ParentChildDeleteArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ParentChild.
     * @param {ParentChildUpdateArgs} args - Arguments to update one ParentChild.
     * @example
     * // Update one ParentChild
     * const parentChild = await prisma.parentChild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentChildUpdateArgs>(args: SelectSubset<T, ParentChildUpdateArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ParentChildren.
     * @param {ParentChildDeleteManyArgs} args - Arguments to filter ParentChildren to delete.
     * @example
     * // Delete a few ParentChildren
     * const { count } = await prisma.parentChild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentChildDeleteManyArgs>(args?: SelectSubset<T, ParentChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParentChildren
     * const parentChild = await prisma.parentChild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentChildUpdateManyArgs>(args: SelectSubset<T, ParentChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentChildren and returns the data updated in the database.
     * @param {ParentChildUpdateManyAndReturnArgs} args - Arguments to update many ParentChildren.
     * @example
     * // Update many ParentChildren
     * const parentChild = await prisma.parentChild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParentChildren and only return the `id`
     * const parentChildWithIdOnly = await prisma.parentChild.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParentChildUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ParentChild.
     * @param {ParentChildUpsertArgs} args - Arguments to update or create a ParentChild.
     * @example
     * // Update or create a ParentChild
     * const parentChild = await prisma.parentChild.upsert({
     *   create: {
     *     // ... data to create a ParentChild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParentChild we want to update
     *   }
     * })
     */
    upsert<T extends ParentChildUpsertArgs>(args: SelectSubset<T, ParentChildUpsertArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildCountArgs} args - Arguments to filter ParentChildren to count.
     * @example
     * // Count the number of ParentChildren
     * const count = await prisma.parentChild.count({
     *   where: {
     *     // ... the filter for the ParentChildren we want to count
     *   }
     * })
    **/
    count<T extends ParentChildCountArgs>(
      args?: Subset<T, ParentChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParentChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentChildAggregateArgs>(args: Subset<T, ParentChildAggregateArgs>): Prisma.PrismaPromise<GetParentChildAggregateType<T>>

    /**
     * Group by ParentChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentChildGroupByArgs['orderBy'] }
        : { orderBy?: ParentChildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParentChild model
   */
  readonly fields: ParentChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParentChild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends ParentUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentUserDefaultArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    child<T extends ChildUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildUserDefaultArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParentChild model
   */ 
  interface ParentChildFieldRefs {
    readonly id: FieldRef<"ParentChild", 'Int'>
    readonly parentId: FieldRef<"ParentChild", 'Int'>
    readonly childId: FieldRef<"ParentChild", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParentChild findUnique
   */
  export type ParentChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild findUniqueOrThrow
   */
  export type ParentChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild findFirst
   */
  export type ParentChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentChildren.
     */
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild findFirstOrThrow
   */
  export type ParentChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentChildren.
     */
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild findMany
   */
  export type ParentChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChildren to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild create
   */
  export type ParentChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The data needed to create a ParentChild.
     */
    data: XOR<ParentChildCreateInput, ParentChildUncheckedCreateInput>
  }

  /**
   * ParentChild createMany
   */
  export type ParentChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParentChildren.
     */
    data: ParentChildCreateManyInput | ParentChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParentChild createManyAndReturn
   */
  export type ParentChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * The data used to create many ParentChildren.
     */
    data: ParentChildCreateManyInput | ParentChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentChild update
   */
  export type ParentChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The data needed to update a ParentChild.
     */
    data: XOR<ParentChildUpdateInput, ParentChildUncheckedUpdateInput>
    /**
     * Choose, which ParentChild to update.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild updateMany
   */
  export type ParentChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParentChildren.
     */
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyInput>
    /**
     * Filter which ParentChildren to update
     */
    where?: ParentChildWhereInput
  }

  /**
   * ParentChild updateManyAndReturn
   */
  export type ParentChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * The data used to update ParentChildren.
     */
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyInput>
    /**
     * Filter which ParentChildren to update
     */
    where?: ParentChildWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentChild upsert
   */
  export type ParentChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The filter to search for the ParentChild to update in case it exists.
     */
    where: ParentChildWhereUniqueInput
    /**
     * In case the ParentChild found by the `where` argument doesn't exist, create a new ParentChild with this data.
     */
    create: XOR<ParentChildCreateInput, ParentChildUncheckedCreateInput>
    /**
     * In case the ParentChild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentChildUpdateInput, ParentChildUncheckedUpdateInput>
  }

  /**
   * ParentChild delete
   */
  export type ParentChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter which ParentChild to delete.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild deleteMany
   */
  export type ParentChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentChildren to delete
     */
    where?: ParentChildWhereInput
  }

  /**
   * ParentChild without action
   */
  export type ParentChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    frequency: number | null
    reward: number | null
    childUserId: number | null
    updatedByUserId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    frequency: number | null
    reward: number | null
    childUserId: number | null
    updatedByUserId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.TaskType | null
    frequency: number | null
    reward: number | null
    childUserId: number | null
    createdAt: Date | null
    updatedByUserId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.TaskType | null
    frequency: number | null
    reward: number | null
    childUserId: number | null
    createdAt: Date | null
    updatedByUserId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    dayOfWeek: number
    frequency: number
    reward: number
    childUserId: number
    createdAt: number
    updatedByUserId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    frequency?: true
    reward?: true
    childUserId?: true
    updatedByUserId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    frequency?: true
    reward?: true
    childUserId?: true
    updatedByUserId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    frequency?: true
    reward?: true
    childUserId?: true
    createdAt?: true
    updatedByUserId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    frequency?: true
    reward?: true
    childUserId?: true
    createdAt?: true
    updatedByUserId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    dayOfWeek?: true
    frequency?: true
    reward?: true
    childUserId?: true
    createdAt?: true
    updatedByUserId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    type: $Enums.TaskType
    dayOfWeek: $Enums.DayOfWeek[]
    frequency: number | null
    reward: number
    childUserId: number
    createdAt: Date
    updatedByUserId: number | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dayOfWeek?: boolean
    frequency?: boolean
    reward?: boolean
    childUserId?: boolean
    createdAt?: boolean
    updatedByUserId?: boolean
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
    taskCompletions?: boolean | Task$taskCompletionsArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dayOfWeek?: boolean
    frequency?: boolean
    reward?: boolean
    childUserId?: boolean
    createdAt?: boolean
    updatedByUserId?: boolean
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dayOfWeek?: boolean
    frequency?: boolean
    reward?: boolean
    childUserId?: boolean
    createdAt?: boolean
    updatedByUserId?: boolean
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dayOfWeek?: boolean
    frequency?: boolean
    reward?: boolean
    childUserId?: boolean
    createdAt?: boolean
    updatedByUserId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "dayOfWeek" | "frequency" | "reward" | "childUserId" | "createdAt" | "updatedByUserId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
    taskCompletions?: boolean | Task$taskCompletionsArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$ChildUserPayload<ExtArgs>
      taskCompletions: Prisma.$TaskCompletionPayload<ExtArgs>[]
      updatedBy: Prisma.$ParentUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      type: $Enums.TaskType
      dayOfWeek: $Enums.DayOfWeek[]
      frequency: number | null
      reward: number
      childUserId: number
      createdAt: Date
      updatedByUserId: number | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ChildUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildUserDefaultArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    taskCompletions<T extends Task$taskCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    updatedBy<T extends Task$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Task$updatedByArgs<ExtArgs>>): Prisma__ParentUserClient<$Result.GetResult<Prisma.$ParentUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly type: FieldRef<"Task", 'TaskType'>
    readonly dayOfWeek: FieldRef<"Task", 'DayOfWeek[]'>
    readonly frequency: FieldRef<"Task", 'Int'>
    readonly reward: FieldRef<"Task", 'Int'>
    readonly childUserId: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedByUserId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.taskCompletions
   */
  export type Task$taskCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    where?: TaskCompletionWhereInput
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    cursor?: TaskCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * Task.updatedBy
   */
  export type Task$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentUser
     */
    select?: ParentUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentUser
     */
    omit?: ParentUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentUserInclude<ExtArgs> | null
    where?: ParentUserWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskCompletion
   */

  export type AggregateTaskCompletion = {
    _count: TaskCompletionCountAggregateOutputType | null
    _avg: TaskCompletionAvgAggregateOutputType | null
    _sum: TaskCompletionSumAggregateOutputType | null
    _min: TaskCompletionMinAggregateOutputType | null
    _max: TaskCompletionMaxAggregateOutputType | null
  }

  export type TaskCompletionAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
  }

  export type TaskCompletionSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
  }

  export type TaskCompletionMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    completionDate: Date | null
    isCompleted: boolean | null
  }

  export type TaskCompletionMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    completionDate: Date | null
    isCompleted: boolean | null
  }

  export type TaskCompletionCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    completionDate: number
    isCompleted: number
    _all: number
  }


  export type TaskCompletionAvgAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
  }

  export type TaskCompletionSumAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
  }

  export type TaskCompletionMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    completionDate?: true
    isCompleted?: true
  }

  export type TaskCompletionMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    completionDate?: true
    isCompleted?: true
  }

  export type TaskCompletionCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    completionDate?: true
    isCompleted?: true
    _all?: true
  }

  export type TaskCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskCompletion to aggregate.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskCompletions
    **/
    _count?: true | TaskCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskCompletionMaxAggregateInputType
  }

  export type GetTaskCompletionAggregateType<T extends TaskCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskCompletion[P]>
      : GetScalarType<T[P], AggregateTaskCompletion[P]>
  }




  export type TaskCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCompletionWhereInput
    orderBy?: TaskCompletionOrderByWithAggregationInput | TaskCompletionOrderByWithAggregationInput[]
    by: TaskCompletionScalarFieldEnum[] | TaskCompletionScalarFieldEnum
    having?: TaskCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCompletionCountAggregateInputType | true
    _avg?: TaskCompletionAvgAggregateInputType
    _sum?: TaskCompletionSumAggregateInputType
    _min?: TaskCompletionMinAggregateInputType
    _max?: TaskCompletionMaxAggregateInputType
  }

  export type TaskCompletionGroupByOutputType = {
    id: number
    taskId: number
    userId: number
    completionDate: Date
    isCompleted: boolean
    _count: TaskCompletionCountAggregateOutputType | null
    _avg: TaskCompletionAvgAggregateOutputType | null
    _sum: TaskCompletionSumAggregateOutputType | null
    _min: TaskCompletionMinAggregateOutputType | null
    _max: TaskCompletionMaxAggregateOutputType | null
  }

  type GetTaskCompletionGroupByPayload<T extends TaskCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskCompletionGroupByOutputType[P]>
        }
      >
    >


  export type TaskCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    completionDate?: boolean
    isCompleted?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskCompletion"]>

  export type TaskCompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    completionDate?: boolean
    isCompleted?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskCompletion"]>

  export type TaskCompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    completionDate?: boolean
    isCompleted?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskCompletion"]>

  export type TaskCompletionSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    completionDate?: boolean
    isCompleted?: boolean
  }

  export type TaskCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "completionDate" | "isCompleted", ExtArgs["result"]["taskCompletion"]>
  export type TaskCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
  }
  export type TaskCompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
  }
  export type TaskCompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ChildUserDefaultArgs<ExtArgs>
  }

  export type $TaskCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskCompletion"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$ChildUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      userId: number
      completionDate: Date
      isCompleted: boolean
    }, ExtArgs["result"]["taskCompletion"]>
    composites: {}
  }

  type TaskCompletionGetPayload<S extends boolean | null | undefined | TaskCompletionDefaultArgs> = $Result.GetResult<Prisma.$TaskCompletionPayload, S>

  type TaskCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCompletionCountAggregateInputType | true
    }

  export interface TaskCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskCompletion'], meta: { name: 'TaskCompletion' } }
    /**
     * Find zero or one TaskCompletion that matches the filter.
     * @param {TaskCompletionFindUniqueArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskCompletionFindUniqueArgs>(args: SelectSubset<T, TaskCompletionFindUniqueArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TaskCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskCompletionFindUniqueOrThrowArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TaskCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionFindFirstArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskCompletionFindFirstArgs>(args?: SelectSubset<T, TaskCompletionFindFirstArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TaskCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionFindFirstOrThrowArgs} args - Arguments to find a TaskCompletion
     * @example
     * // Get one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TaskCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskCompletions
     * const taskCompletions = await prisma.taskCompletion.findMany()
     * 
     * // Get first 10 TaskCompletions
     * const taskCompletions = await prisma.taskCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskCompletionWithIdOnly = await prisma.taskCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskCompletionFindManyArgs>(args?: SelectSubset<T, TaskCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TaskCompletion.
     * @param {TaskCompletionCreateArgs} args - Arguments to create a TaskCompletion.
     * @example
     * // Create one TaskCompletion
     * const TaskCompletion = await prisma.taskCompletion.create({
     *   data: {
     *     // ... data to create a TaskCompletion
     *   }
     * })
     * 
     */
    create<T extends TaskCompletionCreateArgs>(args: SelectSubset<T, TaskCompletionCreateArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TaskCompletions.
     * @param {TaskCompletionCreateManyArgs} args - Arguments to create many TaskCompletions.
     * @example
     * // Create many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCompletionCreateManyArgs>(args?: SelectSubset<T, TaskCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskCompletions and returns the data saved in the database.
     * @param {TaskCompletionCreateManyAndReturnArgs} args - Arguments to create many TaskCompletions.
     * @example
     * // Create many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskCompletions and only return the `id`
     * const taskCompletionWithIdOnly = await prisma.taskCompletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TaskCompletion.
     * @param {TaskCompletionDeleteArgs} args - Arguments to delete one TaskCompletion.
     * @example
     * // Delete one TaskCompletion
     * const TaskCompletion = await prisma.taskCompletion.delete({
     *   where: {
     *     // ... filter to delete one TaskCompletion
     *   }
     * })
     * 
     */
    delete<T extends TaskCompletionDeleteArgs>(args: SelectSubset<T, TaskCompletionDeleteArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TaskCompletion.
     * @param {TaskCompletionUpdateArgs} args - Arguments to update one TaskCompletion.
     * @example
     * // Update one TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskCompletionUpdateArgs>(args: SelectSubset<T, TaskCompletionUpdateArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TaskCompletions.
     * @param {TaskCompletionDeleteManyArgs} args - Arguments to filter TaskCompletions to delete.
     * @example
     * // Delete a few TaskCompletions
     * const { count } = await prisma.taskCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskCompletionDeleteManyArgs>(args?: SelectSubset<T, TaskCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskCompletionUpdateManyArgs>(args: SelectSubset<T, TaskCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskCompletions and returns the data updated in the database.
     * @param {TaskCompletionUpdateManyAndReturnArgs} args - Arguments to update many TaskCompletions.
     * @example
     * // Update many TaskCompletions
     * const taskCompletion = await prisma.taskCompletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskCompletions and only return the `id`
     * const taskCompletionWithIdOnly = await prisma.taskCompletion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskCompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TaskCompletion.
     * @param {TaskCompletionUpsertArgs} args - Arguments to update or create a TaskCompletion.
     * @example
     * // Update or create a TaskCompletion
     * const taskCompletion = await prisma.taskCompletion.upsert({
     *   create: {
     *     // ... data to create a TaskCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskCompletion we want to update
     *   }
     * })
     */
    upsert<T extends TaskCompletionUpsertArgs>(args: SelectSubset<T, TaskCompletionUpsertArgs<ExtArgs>>): Prisma__TaskCompletionClient<$Result.GetResult<Prisma.$TaskCompletionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TaskCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionCountArgs} args - Arguments to filter TaskCompletions to count.
     * @example
     * // Count the number of TaskCompletions
     * const count = await prisma.taskCompletion.count({
     *   where: {
     *     // ... the filter for the TaskCompletions we want to count
     *   }
     * })
    **/
    count<T extends TaskCompletionCountArgs>(
      args?: Subset<T, TaskCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskCompletionAggregateArgs>(args: Subset<T, TaskCompletionAggregateArgs>): Prisma.PrismaPromise<GetTaskCompletionAggregateType<T>>

    /**
     * Group by TaskCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskCompletionGroupByArgs['orderBy'] }
        : { orderBy?: TaskCompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskCompletion model
   */
  readonly fields: TaskCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends ChildUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChildUserDefaultArgs<ExtArgs>>): Prisma__ChildUserClient<$Result.GetResult<Prisma.$ChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskCompletion model
   */ 
  interface TaskCompletionFieldRefs {
    readonly id: FieldRef<"TaskCompletion", 'Int'>
    readonly taskId: FieldRef<"TaskCompletion", 'Int'>
    readonly userId: FieldRef<"TaskCompletion", 'Int'>
    readonly completionDate: FieldRef<"TaskCompletion", 'DateTime'>
    readonly isCompleted: FieldRef<"TaskCompletion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TaskCompletion findUnique
   */
  export type TaskCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion findUniqueOrThrow
   */
  export type TaskCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion findFirst
   */
  export type TaskCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskCompletions.
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskCompletions.
     */
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * TaskCompletion findFirstOrThrow
   */
  export type TaskCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletion to fetch.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskCompletions.
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskCompletions.
     */
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * TaskCompletion findMany
   */
  export type TaskCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter, which TaskCompletions to fetch.
     */
    where?: TaskCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskCompletions to fetch.
     */
    orderBy?: TaskCompletionOrderByWithRelationInput | TaskCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskCompletions.
     */
    cursor?: TaskCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskCompletions.
     */
    skip?: number
    distinct?: TaskCompletionScalarFieldEnum | TaskCompletionScalarFieldEnum[]
  }

  /**
   * TaskCompletion create
   */
  export type TaskCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskCompletion.
     */
    data: XOR<TaskCompletionCreateInput, TaskCompletionUncheckedCreateInput>
  }

  /**
   * TaskCompletion createMany
   */
  export type TaskCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskCompletions.
     */
    data: TaskCompletionCreateManyInput | TaskCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskCompletion createManyAndReturn
   */
  export type TaskCompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * The data used to create many TaskCompletions.
     */
    data: TaskCompletionCreateManyInput | TaskCompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskCompletion update
   */
  export type TaskCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskCompletion.
     */
    data: XOR<TaskCompletionUpdateInput, TaskCompletionUncheckedUpdateInput>
    /**
     * Choose, which TaskCompletion to update.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion updateMany
   */
  export type TaskCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskCompletions.
     */
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyInput>
    /**
     * Filter which TaskCompletions to update
     */
    where?: TaskCompletionWhereInput
  }

  /**
   * TaskCompletion updateManyAndReturn
   */
  export type TaskCompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * The data used to update TaskCompletions.
     */
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyInput>
    /**
     * Filter which TaskCompletions to update
     */
    where?: TaskCompletionWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskCompletion upsert
   */
  export type TaskCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskCompletion to update in case it exists.
     */
    where: TaskCompletionWhereUniqueInput
    /**
     * In case the TaskCompletion found by the `where` argument doesn't exist, create a new TaskCompletion with this data.
     */
    create: XOR<TaskCompletionCreateInput, TaskCompletionUncheckedCreateInput>
    /**
     * In case the TaskCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskCompletionUpdateInput, TaskCompletionUncheckedUpdateInput>
  }

  /**
   * TaskCompletion delete
   */
  export type TaskCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
    /**
     * Filter which TaskCompletion to delete.
     */
    where: TaskCompletionWhereUniqueInput
  }

  /**
   * TaskCompletion deleteMany
   */
  export type TaskCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskCompletions to delete
     */
    where?: TaskCompletionWhereInput
  }

  /**
   * TaskCompletion without action
   */
  export type TaskCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCompletion
     */
    select?: TaskCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskCompletion
     */
    omit?: TaskCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCompletionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ParentUserScalarFieldEnum: {
    id: 'id',
    telegram_id: 'telegram_id',
    name: 'name',
    gender: 'gender',
    photo_url: 'photo_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParentUserScalarFieldEnum = (typeof ParentUserScalarFieldEnum)[keyof typeof ParentUserScalarFieldEnum]


  export const ChildUserScalarFieldEnum: {
    id: 'id',
    telegram_id: 'telegram_id',
    name: 'name',
    gender: 'gender',
    photo_url: 'photo_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChildUserScalarFieldEnum = (typeof ChildUserScalarFieldEnum)[keyof typeof ChildUserScalarFieldEnum]


  export const ParentChildScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    childId: 'childId'
  };

  export type ParentChildScalarFieldEnum = (typeof ParentChildScalarFieldEnum)[keyof typeof ParentChildScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    dayOfWeek: 'dayOfWeek',
    frequency: 'frequency',
    reward: 'reward',
    childUserId: 'childUserId',
    createdAt: 'createdAt',
    updatedByUserId: 'updatedByUserId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskCompletionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    completionDate: 'completionDate',
    isCompleted: 'isCompleted'
  };

  export type TaskCompletionScalarFieldEnum = (typeof TaskCompletionScalarFieldEnum)[keyof typeof TaskCompletionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ParentUserWhereInput = {
    AND?: ParentUserWhereInput | ParentUserWhereInput[]
    OR?: ParentUserWhereInput[]
    NOT?: ParentUserWhereInput | ParentUserWhereInput[]
    id?: IntFilter<"ParentUser"> | number
    telegram_id?: StringFilter<"ParentUser"> | string
    name?: StringFilter<"ParentUser"> | string
    gender?: EnumGenderFilter<"ParentUser"> | $Enums.Gender
    photo_url?: StringNullableFilter<"ParentUser"> | string | null
    createdAt?: DateTimeFilter<"ParentUser"> | Date | string
    updatedAt?: DateTimeFilter<"ParentUser"> | Date | string
    children?: ParentChildListRelationFilter
    updatedTasks?: TaskListRelationFilter
  }

  export type ParentUserOrderByWithRelationInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    children?: ParentChildOrderByRelationAggregateInput
    updatedTasks?: TaskOrderByRelationAggregateInput
  }

  export type ParentUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telegram_id?: string
    AND?: ParentUserWhereInput | ParentUserWhereInput[]
    OR?: ParentUserWhereInput[]
    NOT?: ParentUserWhereInput | ParentUserWhereInput[]
    name?: StringFilter<"ParentUser"> | string
    gender?: EnumGenderFilter<"ParentUser"> | $Enums.Gender
    photo_url?: StringNullableFilter<"ParentUser"> | string | null
    createdAt?: DateTimeFilter<"ParentUser"> | Date | string
    updatedAt?: DateTimeFilter<"ParentUser"> | Date | string
    children?: ParentChildListRelationFilter
    updatedTasks?: TaskListRelationFilter
  }, "id" | "telegram_id">

  export type ParentUserOrderByWithAggregationInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParentUserCountOrderByAggregateInput
    _avg?: ParentUserAvgOrderByAggregateInput
    _max?: ParentUserMaxOrderByAggregateInput
    _min?: ParentUserMinOrderByAggregateInput
    _sum?: ParentUserSumOrderByAggregateInput
  }

  export type ParentUserScalarWhereWithAggregatesInput = {
    AND?: ParentUserScalarWhereWithAggregatesInput | ParentUserScalarWhereWithAggregatesInput[]
    OR?: ParentUserScalarWhereWithAggregatesInput[]
    NOT?: ParentUserScalarWhereWithAggregatesInput | ParentUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParentUser"> | number
    telegram_id?: StringWithAggregatesFilter<"ParentUser"> | string
    name?: StringWithAggregatesFilter<"ParentUser"> | string
    gender?: EnumGenderWithAggregatesFilter<"ParentUser"> | $Enums.Gender
    photo_url?: StringNullableWithAggregatesFilter<"ParentUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParentUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParentUser"> | Date | string
  }

  export type ChildUserWhereInput = {
    AND?: ChildUserWhereInput | ChildUserWhereInput[]
    OR?: ChildUserWhereInput[]
    NOT?: ChildUserWhereInput | ChildUserWhereInput[]
    id?: IntFilter<"ChildUser"> | number
    telegram_id?: StringFilter<"ChildUser"> | string
    name?: StringFilter<"ChildUser"> | string
    gender?: EnumGenderFilter<"ChildUser"> | $Enums.Gender
    photo_url?: StringNullableFilter<"ChildUser"> | string | null
    createdAt?: DateTimeFilter<"ChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"ChildUser"> | Date | string
    parents?: ParentChildListRelationFilter
    tasks?: TaskListRelationFilter
    taskCompletions?: TaskCompletionListRelationFilter
  }

  export type ChildUserOrderByWithRelationInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parents?: ParentChildOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    taskCompletions?: TaskCompletionOrderByRelationAggregateInput
  }

  export type ChildUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telegram_id?: string
    AND?: ChildUserWhereInput | ChildUserWhereInput[]
    OR?: ChildUserWhereInput[]
    NOT?: ChildUserWhereInput | ChildUserWhereInput[]
    name?: StringFilter<"ChildUser"> | string
    gender?: EnumGenderFilter<"ChildUser"> | $Enums.Gender
    photo_url?: StringNullableFilter<"ChildUser"> | string | null
    createdAt?: DateTimeFilter<"ChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"ChildUser"> | Date | string
    parents?: ParentChildListRelationFilter
    tasks?: TaskListRelationFilter
    taskCompletions?: TaskCompletionListRelationFilter
  }, "id" | "telegram_id">

  export type ChildUserOrderByWithAggregationInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChildUserCountOrderByAggregateInput
    _avg?: ChildUserAvgOrderByAggregateInput
    _max?: ChildUserMaxOrderByAggregateInput
    _min?: ChildUserMinOrderByAggregateInput
    _sum?: ChildUserSumOrderByAggregateInput
  }

  export type ChildUserScalarWhereWithAggregatesInput = {
    AND?: ChildUserScalarWhereWithAggregatesInput | ChildUserScalarWhereWithAggregatesInput[]
    OR?: ChildUserScalarWhereWithAggregatesInput[]
    NOT?: ChildUserScalarWhereWithAggregatesInput | ChildUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChildUser"> | number
    telegram_id?: StringWithAggregatesFilter<"ChildUser"> | string
    name?: StringWithAggregatesFilter<"ChildUser"> | string
    gender?: EnumGenderWithAggregatesFilter<"ChildUser"> | $Enums.Gender
    photo_url?: StringNullableWithAggregatesFilter<"ChildUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChildUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChildUser"> | Date | string
  }

  export type ParentChildWhereInput = {
    AND?: ParentChildWhereInput | ParentChildWhereInput[]
    OR?: ParentChildWhereInput[]
    NOT?: ParentChildWhereInput | ParentChildWhereInput[]
    id?: IntFilter<"ParentChild"> | number
    parentId?: IntFilter<"ParentChild"> | number
    childId?: IntFilter<"ParentChild"> | number
    parent?: XOR<ParentUserScalarRelationFilter, ParentUserWhereInput>
    child?: XOR<ChildUserScalarRelationFilter, ChildUserWhereInput>
  }

  export type ParentChildOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
    parent?: ParentUserOrderByWithRelationInput
    child?: ChildUserOrderByWithRelationInput
  }

  export type ParentChildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParentChildWhereInput | ParentChildWhereInput[]
    OR?: ParentChildWhereInput[]
    NOT?: ParentChildWhereInput | ParentChildWhereInput[]
    parentId?: IntFilter<"ParentChild"> | number
    childId?: IntFilter<"ParentChild"> | number
    parent?: XOR<ParentUserScalarRelationFilter, ParentUserWhereInput>
    child?: XOR<ChildUserScalarRelationFilter, ChildUserWhereInput>
  }, "id">

  export type ParentChildOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
    _count?: ParentChildCountOrderByAggregateInput
    _avg?: ParentChildAvgOrderByAggregateInput
    _max?: ParentChildMaxOrderByAggregateInput
    _min?: ParentChildMinOrderByAggregateInput
    _sum?: ParentChildSumOrderByAggregateInput
  }

  export type ParentChildScalarWhereWithAggregatesInput = {
    AND?: ParentChildScalarWhereWithAggregatesInput | ParentChildScalarWhereWithAggregatesInput[]
    OR?: ParentChildScalarWhereWithAggregatesInput[]
    NOT?: ParentChildScalarWhereWithAggregatesInput | ParentChildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParentChild"> | number
    parentId?: IntWithAggregatesFilter<"ParentChild"> | number
    childId?: IntWithAggregatesFilter<"ParentChild"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    dayOfWeek?: EnumDayOfWeekNullableListFilter<"Task">
    frequency?: IntNullableFilter<"Task"> | number | null
    reward?: IntFilter<"Task"> | number
    childUserId?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedByUserId?: IntNullableFilter<"Task"> | number | null
    user?: XOR<ChildUserScalarRelationFilter, ChildUserWhereInput>
    taskCompletions?: TaskCompletionListRelationFilter
    updatedBy?: XOR<ParentUserNullableScalarRelationFilter, ParentUserWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    dayOfWeek?: SortOrder
    frequency?: SortOrderInput | SortOrder
    reward?: SortOrder
    childUserId?: SortOrder
    createdAt?: SortOrder
    updatedByUserId?: SortOrderInput | SortOrder
    user?: ChildUserOrderByWithRelationInput
    taskCompletions?: TaskCompletionOrderByRelationAggregateInput
    updatedBy?: ParentUserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    dayOfWeek?: EnumDayOfWeekNullableListFilter<"Task">
    frequency?: IntNullableFilter<"Task"> | number | null
    reward?: IntFilter<"Task"> | number
    childUserId?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedByUserId?: IntNullableFilter<"Task"> | number | null
    user?: XOR<ChildUserScalarRelationFilter, ChildUserWhereInput>
    taskCompletions?: TaskCompletionListRelationFilter
    updatedBy?: XOR<ParentUserNullableScalarRelationFilter, ParentUserWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    dayOfWeek?: SortOrder
    frequency?: SortOrderInput | SortOrder
    reward?: SortOrder
    childUserId?: SortOrder
    createdAt?: SortOrder
    updatedByUserId?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    type?: EnumTaskTypeWithAggregatesFilter<"Task"> | $Enums.TaskType
    dayOfWeek?: EnumDayOfWeekNullableListFilter<"Task">
    frequency?: IntNullableWithAggregatesFilter<"Task"> | number | null
    reward?: IntWithAggregatesFilter<"Task"> | number
    childUserId?: IntWithAggregatesFilter<"Task"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedByUserId?: IntNullableWithAggregatesFilter<"Task"> | number | null
  }

  export type TaskCompletionWhereInput = {
    AND?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    OR?: TaskCompletionWhereInput[]
    NOT?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    id?: IntFilter<"TaskCompletion"> | number
    taskId?: IntFilter<"TaskCompletion"> | number
    userId?: IntFilter<"TaskCompletion"> | number
    completionDate?: DateTimeFilter<"TaskCompletion"> | Date | string
    isCompleted?: BoolFilter<"TaskCompletion"> | boolean
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<ChildUserScalarRelationFilter, ChildUserWhereInput>
  }

  export type TaskCompletionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    isCompleted?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: ChildUserOrderByWithRelationInput
  }

  export type TaskCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    OR?: TaskCompletionWhereInput[]
    NOT?: TaskCompletionWhereInput | TaskCompletionWhereInput[]
    taskId?: IntFilter<"TaskCompletion"> | number
    userId?: IntFilter<"TaskCompletion"> | number
    completionDate?: DateTimeFilter<"TaskCompletion"> | Date | string
    isCompleted?: BoolFilter<"TaskCompletion"> | boolean
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<ChildUserScalarRelationFilter, ChildUserWhereInput>
  }, "id">

  export type TaskCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    isCompleted?: SortOrder
    _count?: TaskCompletionCountOrderByAggregateInput
    _avg?: TaskCompletionAvgOrderByAggregateInput
    _max?: TaskCompletionMaxOrderByAggregateInput
    _min?: TaskCompletionMinOrderByAggregateInput
    _sum?: TaskCompletionSumOrderByAggregateInput
  }

  export type TaskCompletionScalarWhereWithAggregatesInput = {
    AND?: TaskCompletionScalarWhereWithAggregatesInput | TaskCompletionScalarWhereWithAggregatesInput[]
    OR?: TaskCompletionScalarWhereWithAggregatesInput[]
    NOT?: TaskCompletionScalarWhereWithAggregatesInput | TaskCompletionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskCompletion"> | number
    taskId?: IntWithAggregatesFilter<"TaskCompletion"> | number
    userId?: IntWithAggregatesFilter<"TaskCompletion"> | number
    completionDate?: DateTimeWithAggregatesFilter<"TaskCompletion"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"TaskCompletion"> | boolean
  }

  export type ParentUserCreateInput = {
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildCreateNestedManyWithoutParentInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
  }

  export type ParentUserUncheckedCreateInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildUncheckedCreateNestedManyWithoutParentInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type ParentUserUpdateInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUpdateManyWithoutParentNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
  }

  export type ParentUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type ParentUserCreateManyInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentUserUpdateManyMutationInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUserCreateInput = {
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutUserInput
  }

  export type ChildUserUncheckedCreateInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChildUserUpdateInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutUserNestedInput
  }

  export type ChildUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChildUserCreateManyInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChildUserUpdateManyMutationInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChildUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildCreateInput = {
    parent: ParentUserCreateNestedOneWithoutChildrenInput
    child: ChildUserCreateNestedOneWithoutParentsInput
  }

  export type ParentChildUncheckedCreateInput = {
    id?: number
    parentId: number
    childId: number
  }

  export type ParentChildUpdateInput = {
    parent?: ParentUserUpdateOneRequiredWithoutChildrenNestedInput
    child?: ChildUserUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentChildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    childId?: IntFieldUpdateOperationsInput | number
  }

  export type ParentChildCreateManyInput = {
    id?: number
    parentId: number
    childId: number
  }

  export type ParentChildUpdateManyMutationInput = {

  }

  export type ParentChildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    childId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    createdAt?: Date | string
    user: ChildUserCreateNestedOneWithoutTasksInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutTaskInput
    updatedBy?: ParentUserCreateNestedOneWithoutUpdatedTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    childUserId: number
    createdAt?: Date | string
    updatedByUserId?: number | null
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ChildUserUpdateOneRequiredWithoutTasksNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutTaskNestedInput
    updatedBy?: ParentUserUpdateOneWithoutUpdatedTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    childUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    childUserId: number
    createdAt?: Date | string
    updatedByUserId?: number | null
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    childUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCompletionCreateInput = {
    completionDate?: Date | string
    isCompleted?: boolean
    task: TaskCreateNestedOneWithoutTaskCompletionsInput
    user: ChildUserCreateNestedOneWithoutTaskCompletionsInput
  }

  export type TaskCompletionUncheckedCreateInput = {
    id?: number
    taskId: number
    userId: number
    completionDate?: Date | string
    isCompleted?: boolean
  }

  export type TaskCompletionUpdateInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    task?: TaskUpdateOneRequiredWithoutTaskCompletionsNestedInput
    user?: ChildUserUpdateOneRequiredWithoutTaskCompletionsNestedInput
  }

  export type TaskCompletionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCompletionCreateManyInput = {
    id?: number
    taskId: number
    userId: number
    completionDate?: Date | string
    isCompleted?: boolean
  }

  export type TaskCompletionUpdateManyMutationInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCompletionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParentChildListRelationFilter = {
    every?: ParentChildWhereInput
    some?: ParentChildWhereInput
    none?: ParentChildWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParentChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentUserCountOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParentUserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentUserMinOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParentUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TaskCompletionListRelationFilter = {
    every?: TaskCompletionWhereInput
    some?: TaskCompletionWhereInput
    none?: TaskCompletionWhereInput
  }

  export type TaskCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChildUserCountOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChildUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChildUserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChildUserMinOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    photo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChildUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParentUserScalarRelationFilter = {
    is?: ParentUserWhereInput
    isNot?: ParentUserWhereInput
  }

  export type ChildUserScalarRelationFilter = {
    is?: ChildUserWhereInput
    isNot?: ChildUserWhereInput
  }

  export type ParentChildCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type ParentChildAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type ParentChildMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type ParentChildMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type ParentChildSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumDayOfWeekNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel> | null
    has?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    hasSome?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ParentUserNullableScalarRelationFilter = {
    is?: ParentUserWhereInput | null
    isNot?: ParentUserWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dayOfWeek?: SortOrder
    frequency?: SortOrder
    reward?: SortOrder
    childUserId?: SortOrder
    createdAt?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    frequency?: SortOrder
    reward?: SortOrder
    childUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    frequency?: SortOrder
    reward?: SortOrder
    childUserId?: SortOrder
    createdAt?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    frequency?: SortOrder
    reward?: SortOrder
    childUserId?: SortOrder
    createdAt?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    frequency?: SortOrder
    reward?: SortOrder
    childUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    isCompleted?: SortOrder
  }

  export type TaskCompletionAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type TaskCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    isCompleted?: SortOrder
  }

  export type TaskCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    completionDate?: SortOrder
    isCompleted?: SortOrder
  }

  export type TaskCompletionSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParentChildCreateNestedManyWithoutParentInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ParentChildUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParentChildUpdateManyWithoutParentNestedInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutParentInput | ParentChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutParentInput | ParentChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutParentInput | ParentChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUpdatedByInput | TaskUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUpdatedByInput | TaskUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUpdatedByInput | TaskUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParentChildUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutParentInput | ParentChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutParentInput | ParentChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutParentInput | ParentChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUpdatedByInput | TaskUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUpdatedByInput | TaskUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUpdatedByInput | TaskUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ParentChildCreateNestedManyWithoutChildInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type ParentChildUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type ParentChildUpdateManyWithoutChildNestedInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutChildInput | ParentChildUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutChildInput | ParentChildUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutChildInput | ParentChildUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutUserInput | TaskCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutUserInput | TaskCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutUserInput | TaskCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type ParentChildUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput> | ParentChildCreateWithoutChildInput[] | ParentChildUncheckedCreateWithoutChildInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutChildInput | ParentChildCreateOrConnectWithoutChildInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutChildInput | ParentChildUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: ParentChildCreateManyChildInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutChildInput | ParentChildUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutChildInput | ParentChildUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput> | TaskCompletionCreateWithoutUserInput[] | TaskCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutUserInput | TaskCompletionCreateOrConnectWithoutUserInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutUserInput | TaskCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCompletionCreateManyUserInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutUserInput | TaskCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutUserInput | TaskCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type ParentUserCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ParentUserCreateWithoutChildrenInput, ParentUserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ParentUserCreateOrConnectWithoutChildrenInput
    connect?: ParentUserWhereUniqueInput
  }

  export type ChildUserCreateNestedOneWithoutParentsInput = {
    create?: XOR<ChildUserCreateWithoutParentsInput, ChildUserUncheckedCreateWithoutParentsInput>
    connectOrCreate?: ChildUserCreateOrConnectWithoutParentsInput
    connect?: ChildUserWhereUniqueInput
  }

  export type ParentUserUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<ParentUserCreateWithoutChildrenInput, ParentUserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ParentUserCreateOrConnectWithoutChildrenInput
    upsert?: ParentUserUpsertWithoutChildrenInput
    connect?: ParentUserWhereUniqueInput
    update?: XOR<XOR<ParentUserUpdateToOneWithWhereWithoutChildrenInput, ParentUserUpdateWithoutChildrenInput>, ParentUserUncheckedUpdateWithoutChildrenInput>
  }

  export type ChildUserUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<ChildUserCreateWithoutParentsInput, ChildUserUncheckedCreateWithoutParentsInput>
    connectOrCreate?: ChildUserCreateOrConnectWithoutParentsInput
    upsert?: ChildUserUpsertWithoutParentsInput
    connect?: ChildUserWhereUniqueInput
    update?: XOR<XOR<ChildUserUpdateToOneWithWhereWithoutParentsInput, ChildUserUpdateWithoutParentsInput>, ChildUserUncheckedUpdateWithoutParentsInput>
  }

  export type TaskCreatedayOfWeekInput = {
    set: $Enums.DayOfWeek[]
  }

  export type ChildUserCreateNestedOneWithoutTasksInput = {
    create?: XOR<ChildUserCreateWithoutTasksInput, ChildUserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChildUserCreateOrConnectWithoutTasksInput
    connect?: ChildUserWhereUniqueInput
  }

  export type TaskCompletionCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskCompletionCreateWithoutTaskInput, TaskCompletionUncheckedCreateWithoutTaskInput> | TaskCompletionCreateWithoutTaskInput[] | TaskCompletionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutTaskInput | TaskCompletionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskCompletionCreateManyTaskInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type ParentUserCreateNestedOneWithoutUpdatedTasksInput = {
    create?: XOR<ParentUserCreateWithoutUpdatedTasksInput, ParentUserUncheckedCreateWithoutUpdatedTasksInput>
    connectOrCreate?: ParentUserCreateOrConnectWithoutUpdatedTasksInput
    connect?: ParentUserWhereUniqueInput
  }

  export type TaskCompletionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskCompletionCreateWithoutTaskInput, TaskCompletionUncheckedCreateWithoutTaskInput> | TaskCompletionCreateWithoutTaskInput[] | TaskCompletionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutTaskInput | TaskCompletionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskCompletionCreateManyTaskInputEnvelope
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type TaskUpdatedayOfWeekInput = {
    set?: $Enums.DayOfWeek[]
    push?: $Enums.DayOfWeek | $Enums.DayOfWeek[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChildUserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ChildUserCreateWithoutTasksInput, ChildUserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChildUserCreateOrConnectWithoutTasksInput
    upsert?: ChildUserUpsertWithoutTasksInput
    connect?: ChildUserWhereUniqueInput
    update?: XOR<XOR<ChildUserUpdateToOneWithWhereWithoutTasksInput, ChildUserUpdateWithoutTasksInput>, ChildUserUncheckedUpdateWithoutTasksInput>
  }

  export type TaskCompletionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutTaskInput, TaskCompletionUncheckedCreateWithoutTaskInput> | TaskCompletionCreateWithoutTaskInput[] | TaskCompletionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutTaskInput | TaskCompletionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutTaskInput | TaskCompletionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskCompletionCreateManyTaskInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutTaskInput | TaskCompletionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutTaskInput | TaskCompletionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type ParentUserUpdateOneWithoutUpdatedTasksNestedInput = {
    create?: XOR<ParentUserCreateWithoutUpdatedTasksInput, ParentUserUncheckedCreateWithoutUpdatedTasksInput>
    connectOrCreate?: ParentUserCreateOrConnectWithoutUpdatedTasksInput
    upsert?: ParentUserUpsertWithoutUpdatedTasksInput
    disconnect?: ParentUserWhereInput | boolean
    delete?: ParentUserWhereInput | boolean
    connect?: ParentUserWhereUniqueInput
    update?: XOR<XOR<ParentUserUpdateToOneWithWhereWithoutUpdatedTasksInput, ParentUserUpdateWithoutUpdatedTasksInput>, ParentUserUncheckedUpdateWithoutUpdatedTasksInput>
  }

  export type TaskCompletionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskCompletionCreateWithoutTaskInput, TaskCompletionUncheckedCreateWithoutTaskInput> | TaskCompletionCreateWithoutTaskInput[] | TaskCompletionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCompletionCreateOrConnectWithoutTaskInput | TaskCompletionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskCompletionUpsertWithWhereUniqueWithoutTaskInput | TaskCompletionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskCompletionCreateManyTaskInputEnvelope
    set?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    disconnect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    delete?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    connect?: TaskCompletionWhereUniqueInput | TaskCompletionWhereUniqueInput[]
    update?: TaskCompletionUpdateWithWhereUniqueWithoutTaskInput | TaskCompletionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskCompletionUpdateManyWithWhereWithoutTaskInput | TaskCompletionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTaskCompletionsInput = {
    create?: XOR<TaskCreateWithoutTaskCompletionsInput, TaskUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskCompletionsInput
    connect?: TaskWhereUniqueInput
  }

  export type ChildUserCreateNestedOneWithoutTaskCompletionsInput = {
    create?: XOR<ChildUserCreateWithoutTaskCompletionsInput, ChildUserUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: ChildUserCreateOrConnectWithoutTaskCompletionsInput
    connect?: ChildUserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskUpdateOneRequiredWithoutTaskCompletionsNestedInput = {
    create?: XOR<TaskCreateWithoutTaskCompletionsInput, TaskUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskCompletionsInput
    upsert?: TaskUpsertWithoutTaskCompletionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskCompletionsInput, TaskUpdateWithoutTaskCompletionsInput>, TaskUncheckedUpdateWithoutTaskCompletionsInput>
  }

  export type ChildUserUpdateOneRequiredWithoutTaskCompletionsNestedInput = {
    create?: XOR<ChildUserCreateWithoutTaskCompletionsInput, ChildUserUncheckedCreateWithoutTaskCompletionsInput>
    connectOrCreate?: ChildUserCreateOrConnectWithoutTaskCompletionsInput
    upsert?: ChildUserUpsertWithoutTaskCompletionsInput
    connect?: ChildUserWhereUniqueInput
    update?: XOR<XOR<ChildUserUpdateToOneWithWhereWithoutTaskCompletionsInput, ChildUserUpdateWithoutTaskCompletionsInput>, ChildUserUncheckedUpdateWithoutTaskCompletionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParentChildCreateWithoutParentInput = {
    child: ChildUserCreateNestedOneWithoutParentsInput
  }

  export type ParentChildUncheckedCreateWithoutParentInput = {
    id?: number
    childId: number
  }

  export type ParentChildCreateOrConnectWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    create: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput>
  }

  export type ParentChildCreateManyParentInputEnvelope = {
    data: ParentChildCreateManyParentInput | ParentChildCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUpdatedByInput = {
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    createdAt?: Date | string
    user: ChildUserCreateNestedOneWithoutTasksInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    childUserId: number
    createdAt?: Date | string
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUpdatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput>
  }

  export type TaskCreateManyUpdatedByInputEnvelope = {
    data: TaskCreateManyUpdatedByInput | TaskCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ParentChildUpsertWithWhereUniqueWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    update: XOR<ParentChildUpdateWithoutParentInput, ParentChildUncheckedUpdateWithoutParentInput>
    create: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput>
  }

  export type ParentChildUpdateWithWhereUniqueWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    data: XOR<ParentChildUpdateWithoutParentInput, ParentChildUncheckedUpdateWithoutParentInput>
  }

  export type ParentChildUpdateManyWithWhereWithoutParentInput = {
    where: ParentChildScalarWhereInput
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyWithoutParentInput>
  }

  export type ParentChildScalarWhereInput = {
    AND?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
    OR?: ParentChildScalarWhereInput[]
    NOT?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
    id?: IntFilter<"ParentChild"> | number
    parentId?: IntFilter<"ParentChild"> | number
    childId?: IntFilter<"ParentChild"> | number
  }

  export type TaskUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUpdatedByInput, TaskUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUpdatedByInput, TaskUncheckedUpdateWithoutUpdatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutUpdatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    dayOfWeek?: EnumDayOfWeekNullableListFilter<"Task">
    frequency?: IntNullableFilter<"Task"> | number | null
    reward?: IntFilter<"Task"> | number
    childUserId?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedByUserId?: IntNullableFilter<"Task"> | number | null
  }

  export type ParentChildCreateWithoutChildInput = {
    parent: ParentUserCreateNestedOneWithoutChildrenInput
  }

  export type ParentChildUncheckedCreateWithoutChildInput = {
    id?: number
    parentId: number
  }

  export type ParentChildCreateOrConnectWithoutChildInput = {
    where: ParentChildWhereUniqueInput
    create: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput>
  }

  export type ParentChildCreateManyChildInputEnvelope = {
    data: ParentChildCreateManyChildInput | ParentChildCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    createdAt?: Date | string
    taskCompletions?: TaskCompletionCreateNestedManyWithoutTaskInput
    updatedBy?: ParentUserCreateNestedOneWithoutUpdatedTasksInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    createdAt?: Date | string
    updatedByUserId?: number | null
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCompletionCreateWithoutUserInput = {
    completionDate?: Date | string
    isCompleted?: boolean
    task: TaskCreateNestedOneWithoutTaskCompletionsInput
  }

  export type TaskCompletionUncheckedCreateWithoutUserInput = {
    id?: number
    taskId: number
    completionDate?: Date | string
    isCompleted?: boolean
  }

  export type TaskCompletionCreateOrConnectWithoutUserInput = {
    where: TaskCompletionWhereUniqueInput
    create: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput>
  }

  export type TaskCompletionCreateManyUserInputEnvelope = {
    data: TaskCompletionCreateManyUserInput | TaskCompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParentChildUpsertWithWhereUniqueWithoutChildInput = {
    where: ParentChildWhereUniqueInput
    update: XOR<ParentChildUpdateWithoutChildInput, ParentChildUncheckedUpdateWithoutChildInput>
    create: XOR<ParentChildCreateWithoutChildInput, ParentChildUncheckedCreateWithoutChildInput>
  }

  export type ParentChildUpdateWithWhereUniqueWithoutChildInput = {
    where: ParentChildWhereUniqueInput
    data: XOR<ParentChildUpdateWithoutChildInput, ParentChildUncheckedUpdateWithoutChildInput>
  }

  export type ParentChildUpdateManyWithWhereWithoutChildInput = {
    where: ParentChildScalarWhereInput
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyWithoutChildInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskCompletionWhereUniqueInput
    update: XOR<TaskCompletionUpdateWithoutUserInput, TaskCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCompletionCreateWithoutUserInput, TaskCompletionUncheckedCreateWithoutUserInput>
  }

  export type TaskCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskCompletionWhereUniqueInput
    data: XOR<TaskCompletionUpdateWithoutUserInput, TaskCompletionUncheckedUpdateWithoutUserInput>
  }

  export type TaskCompletionUpdateManyWithWhereWithoutUserInput = {
    where: TaskCompletionScalarWhereInput
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskCompletionScalarWhereInput = {
    AND?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
    OR?: TaskCompletionScalarWhereInput[]
    NOT?: TaskCompletionScalarWhereInput | TaskCompletionScalarWhereInput[]
    id?: IntFilter<"TaskCompletion"> | number
    taskId?: IntFilter<"TaskCompletion"> | number
    userId?: IntFilter<"TaskCompletion"> | number
    completionDate?: DateTimeFilter<"TaskCompletion"> | Date | string
    isCompleted?: BoolFilter<"TaskCompletion"> | boolean
  }

  export type ParentUserCreateWithoutChildrenInput = {
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
  }

  export type ParentUserUncheckedCreateWithoutChildrenInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type ParentUserCreateOrConnectWithoutChildrenInput = {
    where: ParentUserWhereUniqueInput
    create: XOR<ParentUserCreateWithoutChildrenInput, ParentUserUncheckedCreateWithoutChildrenInput>
  }

  export type ChildUserCreateWithoutParentsInput = {
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutUserInput
  }

  export type ChildUserUncheckedCreateWithoutParentsInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChildUserCreateOrConnectWithoutParentsInput = {
    where: ChildUserWhereUniqueInput
    create: XOR<ChildUserCreateWithoutParentsInput, ChildUserUncheckedCreateWithoutParentsInput>
  }

  export type ParentUserUpsertWithoutChildrenInput = {
    update: XOR<ParentUserUpdateWithoutChildrenInput, ParentUserUncheckedUpdateWithoutChildrenInput>
    create: XOR<ParentUserCreateWithoutChildrenInput, ParentUserUncheckedCreateWithoutChildrenInput>
    where?: ParentUserWhereInput
  }

  export type ParentUserUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ParentUserWhereInput
    data: XOR<ParentUserUpdateWithoutChildrenInput, ParentUserUncheckedUpdateWithoutChildrenInput>
  }

  export type ParentUserUpdateWithoutChildrenInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
  }

  export type ParentUserUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type ChildUserUpsertWithoutParentsInput = {
    update: XOR<ChildUserUpdateWithoutParentsInput, ChildUserUncheckedUpdateWithoutParentsInput>
    create: XOR<ChildUserCreateWithoutParentsInput, ChildUserUncheckedCreateWithoutParentsInput>
    where?: ChildUserWhereInput
  }

  export type ChildUserUpdateToOneWithWhereWithoutParentsInput = {
    where?: ChildUserWhereInput
    data: XOR<ChildUserUpdateWithoutParentsInput, ChildUserUncheckedUpdateWithoutParentsInput>
  }

  export type ChildUserUpdateWithoutParentsInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutUserNestedInput
  }

  export type ChildUserUncheckedUpdateWithoutParentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChildUserCreateWithoutTasksInput = {
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    taskCompletions?: TaskCompletionCreateNestedManyWithoutUserInput
  }

  export type ChildUserUncheckedCreateWithoutTasksInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    taskCompletions?: TaskCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChildUserCreateOrConnectWithoutTasksInput = {
    where: ChildUserWhereUniqueInput
    create: XOR<ChildUserCreateWithoutTasksInput, ChildUserUncheckedCreateWithoutTasksInput>
  }

  export type TaskCompletionCreateWithoutTaskInput = {
    completionDate?: Date | string
    isCompleted?: boolean
    user: ChildUserCreateNestedOneWithoutTaskCompletionsInput
  }

  export type TaskCompletionUncheckedCreateWithoutTaskInput = {
    id?: number
    userId: number
    completionDate?: Date | string
    isCompleted?: boolean
  }

  export type TaskCompletionCreateOrConnectWithoutTaskInput = {
    where: TaskCompletionWhereUniqueInput
    create: XOR<TaskCompletionCreateWithoutTaskInput, TaskCompletionUncheckedCreateWithoutTaskInput>
  }

  export type TaskCompletionCreateManyTaskInputEnvelope = {
    data: TaskCompletionCreateManyTaskInput | TaskCompletionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ParentUserCreateWithoutUpdatedTasksInput = {
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type ParentUserUncheckedCreateWithoutUpdatedTasksInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUserCreateOrConnectWithoutUpdatedTasksInput = {
    where: ParentUserWhereUniqueInput
    create: XOR<ParentUserCreateWithoutUpdatedTasksInput, ParentUserUncheckedCreateWithoutUpdatedTasksInput>
  }

  export type ChildUserUpsertWithoutTasksInput = {
    update: XOR<ChildUserUpdateWithoutTasksInput, ChildUserUncheckedUpdateWithoutTasksInput>
    create: XOR<ChildUserCreateWithoutTasksInput, ChildUserUncheckedCreateWithoutTasksInput>
    where?: ChildUserWhereInput
  }

  export type ChildUserUpdateToOneWithWhereWithoutTasksInput = {
    where?: ChildUserWhereInput
    data: XOR<ChildUserUpdateWithoutTasksInput, ChildUserUncheckedUpdateWithoutTasksInput>
  }

  export type ChildUserUpdateWithoutTasksInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutUserNestedInput
  }

  export type ChildUserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCompletionUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskCompletionWhereUniqueInput
    update: XOR<TaskCompletionUpdateWithoutTaskInput, TaskCompletionUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskCompletionCreateWithoutTaskInput, TaskCompletionUncheckedCreateWithoutTaskInput>
  }

  export type TaskCompletionUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskCompletionWhereUniqueInput
    data: XOR<TaskCompletionUpdateWithoutTaskInput, TaskCompletionUncheckedUpdateWithoutTaskInput>
  }

  export type TaskCompletionUpdateManyWithWhereWithoutTaskInput = {
    where: TaskCompletionScalarWhereInput
    data: XOR<TaskCompletionUpdateManyMutationInput, TaskCompletionUncheckedUpdateManyWithoutTaskInput>
  }

  export type ParentUserUpsertWithoutUpdatedTasksInput = {
    update: XOR<ParentUserUpdateWithoutUpdatedTasksInput, ParentUserUncheckedUpdateWithoutUpdatedTasksInput>
    create: XOR<ParentUserCreateWithoutUpdatedTasksInput, ParentUserUncheckedCreateWithoutUpdatedTasksInput>
    where?: ParentUserWhereInput
  }

  export type ParentUserUpdateToOneWithWhereWithoutUpdatedTasksInput = {
    where?: ParentUserWhereInput
    data: XOR<ParentUserUpdateWithoutUpdatedTasksInput, ParentUserUncheckedUpdateWithoutUpdatedTasksInput>
  }

  export type ParentUserUpdateWithoutUpdatedTasksInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type ParentUserUncheckedUpdateWithoutUpdatedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TaskCreateWithoutTaskCompletionsInput = {
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    createdAt?: Date | string
    user: ChildUserCreateNestedOneWithoutTasksInput
    updatedBy?: ParentUserCreateNestedOneWithoutUpdatedTasksInput
  }

  export type TaskUncheckedCreateWithoutTaskCompletionsInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    childUserId: number
    createdAt?: Date | string
    updatedByUserId?: number | null
  }

  export type TaskCreateOrConnectWithoutTaskCompletionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskCompletionsInput, TaskUncheckedCreateWithoutTaskCompletionsInput>
  }

  export type ChildUserCreateWithoutTaskCompletionsInput = {
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildCreateNestedManyWithoutChildInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type ChildUserUncheckedCreateWithoutTaskCompletionsInput = {
    id?: number
    telegram_id: string
    name: string
    gender: $Enums.Gender
    photo_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parents?: ParentChildUncheckedCreateNestedManyWithoutChildInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChildUserCreateOrConnectWithoutTaskCompletionsInput = {
    where: ChildUserWhereUniqueInput
    create: XOR<ChildUserCreateWithoutTaskCompletionsInput, ChildUserUncheckedCreateWithoutTaskCompletionsInput>
  }

  export type TaskUpsertWithoutTaskCompletionsInput = {
    update: XOR<TaskUpdateWithoutTaskCompletionsInput, TaskUncheckedUpdateWithoutTaskCompletionsInput>
    create: XOR<TaskCreateWithoutTaskCompletionsInput, TaskUncheckedCreateWithoutTaskCompletionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskCompletionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskCompletionsInput, TaskUncheckedUpdateWithoutTaskCompletionsInput>
  }

  export type TaskUpdateWithoutTaskCompletionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ChildUserUpdateOneRequiredWithoutTasksNestedInput
    updatedBy?: ParentUserUpdateOneWithoutUpdatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskCompletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    childUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChildUserUpsertWithoutTaskCompletionsInput = {
    update: XOR<ChildUserUpdateWithoutTaskCompletionsInput, ChildUserUncheckedUpdateWithoutTaskCompletionsInput>
    create: XOR<ChildUserCreateWithoutTaskCompletionsInput, ChildUserUncheckedCreateWithoutTaskCompletionsInput>
    where?: ChildUserWhereInput
  }

  export type ChildUserUpdateToOneWithWhereWithoutTaskCompletionsInput = {
    where?: ChildUserWhereInput
    data: XOR<ChildUserUpdateWithoutTaskCompletionsInput, ChildUserUncheckedUpdateWithoutTaskCompletionsInput>
  }

  export type ChildUserUpdateWithoutTaskCompletionsInput = {
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUpdateManyWithoutChildNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type ChildUserUncheckedUpdateWithoutTaskCompletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parents?: ParentChildUncheckedUpdateManyWithoutChildNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParentChildCreateManyParentInput = {
    id?: number
    childId: number
  }

  export type TaskCreateManyUpdatedByInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    childUserId: number
    createdAt?: Date | string
  }

  export type ParentChildUpdateWithoutParentInput = {
    child?: ChildUserUpdateOneRequiredWithoutParentsNestedInput
  }

  export type ParentChildUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    childId?: IntFieldUpdateOperationsInput | number
  }

  export type ParentChildUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    childId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ChildUserUpdateOneRequiredWithoutTasksNestedInput
    taskCompletions?: TaskCompletionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    childUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    childUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentChildCreateManyChildInput = {
    id?: number
    parentId: number
  }

  export type TaskCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.TaskType
    dayOfWeek?: TaskCreatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: number | null
    reward: number
    createdAt?: Date | string
    updatedByUserId?: number | null
  }

  export type TaskCompletionCreateManyUserInput = {
    id?: number
    taskId: number
    completionDate?: Date | string
    isCompleted?: boolean
  }

  export type ParentChildUpdateWithoutChildInput = {
    parent?: ParentUserUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type ParentChildUncheckedUpdateWithoutChildInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
  }

  export type ParentChildUncheckedUpdateManyWithoutChildInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskCompletions?: TaskCompletionUpdateManyWithoutTaskNestedInput
    updatedBy?: ParentUserUpdateOneWithoutUpdatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    taskCompletions?: TaskCompletionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    dayOfWeek?: TaskUpdatedayOfWeekInput | $Enums.DayOfWeek[]
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    reward?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCompletionUpdateWithoutUserInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    task?: TaskUpdateOneRequiredWithoutTaskCompletionsNestedInput
  }

  export type TaskCompletionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCompletionCreateManyTaskInput = {
    id?: number
    userId: number
    completionDate?: Date | string
    isCompleted?: boolean
  }

  export type TaskCompletionUpdateWithoutTaskInput = {
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    user?: ChildUserUpdateOneRequiredWithoutTaskCompletionsNestedInput
  }

  export type TaskCompletionUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCompletionUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}